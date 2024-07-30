const Joi = require("joi");
const db = require("../db.js");
const jwt = require("jsonwebtoken")
require("dotenv").config();


const userSchema = Joi.object({
    username: Joi.string(),
    password: Joi.string().alphanum(),
})

const usersControllers = {
    logIn : async (req, res) =>{
        const {username, password} = req.body
        const user = await db.oneOrNone('SELECT * FROM users WHERE username=$1', username)

        if(user && user.password === password){
            const payload = {
                id : user.id,
                username,
            }
            const secretKey = process.env.SECRET_KEY;
            const token = jwt.sign(payload, secretKey)

            console.log(token);

            await db.none('UPDATE users SET token=$2 WHERE id=$1', [user.id, token])
            res.status(200).json({ id: user.id, username, token})
        }else{
            res.status(400).json({msg: "Username or password incorrect"})
        }

    },
    signUp: async (req, res) =>{
        const {username, password} = req.body;
        const user = await db.oneOrNone('SELECT * FROM users WHERE username = $1', username)

        if(user){
            res.status(409).json({msg: "Username already in use."})
        } else{
            const {id} = await db.one('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id', [username, password]);
            res.status(201).json({id, msg: "User created successfully."})
        }

    }
}

module.exports = usersControllers;
