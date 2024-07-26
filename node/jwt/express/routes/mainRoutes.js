const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController.js")


//routes
router.get("/", mainController.home); //hacemos el path a la home

router.get("/planets", mainController.showPlanetList ); //path a planets

router.get("/planets/:id", mainController.showPlanetById );

router.get("/error", mainController.error)

router.post("/planets", mainController.postNewPlanet);

router.put("/planets/:id", mainController.editPlanet);

router.delete("/planets/:id", mainController.deletePlanet);
// app.post("/test", (req, res)=>{
//     console.log(req);
// })

module.exports = router;
