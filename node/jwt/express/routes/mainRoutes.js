const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController.js")
const usersControllers = require("../controllers/usersControllers.js")
const multer = require("multer");
//const upload = multer({dest: "assets/"})

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "assets/")
    },
    filename: (req, file, cb)=>{
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*1E9)
        cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg")
    }
})

const upload = multer({storage : storage})

//routes
router.get("/", mainController.home); //hacemos el path a la home

router.get("/planets", mainController.showPlanetList ); //path a planets

router.get("/planets/:id", mainController.showPlanetById );

router.get("/error", mainController.error)

router.post("/planets", mainController.postNewPlanet);

router.put("/planets/:id", mainController.editPlanet);

router.delete("/planets/:id", mainController.deletePlanet);

router.post("/planets/:id/image", upload.single("planet-img"), mainController.postPlanetImg)

router.post("/users/login", usersControllers.logIn)

// app.post("/test", (req, res)=>{
//     console.log(req);
// })

module.exports = router;
