require("dotenv").config();
const passport = require("passport");
const passportJWT = require("passport-jwt");
const db = require("./db")
const secretKey = process.env.SECRET_KEY;

passport.use(

    new passportJWT.Strategy({
        secretOrKey: secretKey,
        jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    }, async (payload, done) => {
        const user = db.one('SELECT * FROM users WHERE id=$1', payload.id)
        console.log(user)
        try {
            return user ? done (null, user) : done(new Error("User not found."));
        }catch(err){
            done (err);
        }
    })

)