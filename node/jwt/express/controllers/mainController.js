let planets = require("../data/planets.js");
const Joi = require("joi");

const planetSchema = Joi.object({
  id: Joi.number(),
  name: Joi.string(),
});
const mainController = {
  home: (req, res) => {
    res.status(200).send("Hello Ona!");
  },
  showPlanetList: (req, res) => {
    res.status(200).json(planets);
  },
  showPlanetById: (req, res) => {
    const { id } = req.params;
    const requestedPlanets = planets.find((planet) => planet.id === Number(id));
    res.json(requestedPlanets);
  },
  error: async (req, res) => {
    throw new Error("Async error!");
  },
  postNewPlanet: (req, res) => {
    //console.log(req.body);
    const { name } = req.body;
    const id = planets.length + 1;

    const newPlanet = { id, name };
    const validation = planetSchema.validate(newPlanet);
    console.log(validation);
    if (validation.error) {
      res.status(400).json(validation.error.details[0].message);
      return;
    }
    planets = [...planets, newPlanet];
    res.status(201).json(planets);
    //res.status(201).json(planets)
  },
  editPlanet: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const changePlanet = planets.map((planet) => {
      if (planet.id === Number(id)) {
        planet.name = name;
      }
      return planet
    });
    res.status(200).json({ changePlanet });
  },
  deletePlanet: (req, res) => {
    const { id } = req.params;
    const newPlanetsArray = planets.filter((planet) => {
      return planet.id != Number(id);
    });
    res.status(200).json({ msg: "success!", newPlanetsArray });
  },
};

module.exports = mainController;
