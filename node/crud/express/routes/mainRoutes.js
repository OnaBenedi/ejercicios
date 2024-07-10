const express = require("express");
const router = express.Router();

let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

//routes
router.get("/", (req, res) => {
  res.status(200).send("Hello!");
}); //hacemos el path a la home

router.get("/planets", (req, res) => {
  res.json(planets);
}); //path a planets

router.get("/planets/:id", (req, res) => {
    planets.filter()
    res.json(planets);
  })
// app.post("/test", (req, res)=>{
//     console.log(req);
// })

module.exports = router;
