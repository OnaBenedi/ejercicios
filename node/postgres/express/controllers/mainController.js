let planets = require("../data/planets.js");
const Joi = require("joi");
const pgPromise = require("pg-promise");

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");
//postgres://postgres:contraseña@localhost:puerto/basedatos

async function setUpDb() {
  await db.none(`
    DROP TABLE IF EXISTS planets;
    CREATE TABLE planets(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image TEXT
    )`);
  await db.none(`INSERT INTO planets (name) VALUES ('earth')`);

  await db.none(`INSERT INTO planets (name) VALUES ('mars')`);

  const planets2 = await db.many(`SELECT * FROM planets`);

  console.log(planets2);
}

setUpDb() //cada vez que se modifica el documento se recarga, si se comenta no se recarga
const planetSchema = Joi.string().alphanum()
// object({
//   name: Joi.string().alphanum(),
// });
const mainController = {
  home: (req, res) => {
    res.status(200).send("Hello!");
  },
  showPlanetList: async (req, res) => {
    const planetChart = await db.many(`SELECT * FROM planets ORDER BY id`)
    res.status(200).json(planetChart);
  },
  showPlanetById: async (req, res) => {
    const { id } = req.params;
    const requestedPlanets = await db.oneOrNone(`SELECT * FROM planets WHERE id = $1`, Number(id))
    //planets.find((planet) => planet.id === Number(id));
    res.json(requestedPlanets);
  },
  error: async (req, res) => {
    throw new Error("Async error!");
  },
  postNewPlanet: async (req, res) => {
    //console.log(req.body);
    const { name } = req.body;
    //const id = planets.length + 1;

    //const newPlanet = { id, name };
    const validation = planetSchema.validate(name);
    console.log(validation);
    if (validation.error) {
      res.status(400).json(validation.error.details[0].message);
      return;
    }
    await db.none(`INSERT INTO planets (name) VALUES ($1)`, name)
    const planetChart = await db.many(`SELECT * FROM planets ORDER BY id`)
    //planets = [...planets, newPlanet];
    res.status(201).json(planetChart);
    //res.status(201).json(planets)
  },
  editPlanet: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const validation = planetSchema.validate(name);
    console.log(validation);
    if (validation.error) {
      res.status(400).json(validation.error.details[0].message);
      return;
    }
    await db.none(`UPDATE planets SET name = $2 WHERE id = $1`, [Number(id), name])

    // const changePlanet = planets.map((planet) => {
    //   if (planet.id === Number(id)) {
    //     planet.name = name;
    //   }
    //   return planet;
    // });
    const planetChart = await db.many(`SELECT * FROM planets ORDER BY id`)
    res.status(200).json(planetChart);
  },
  deletePlanet: async (req, res) => {
    const { id } = req.params;
    // const newPlanetsArray = planets.filter((planet) => {
    //   return planet.id != Number(id);
    // });
    await db.none(`DELETE FROM planets WHERE id=$1`, Number(id))
    const planetChart = await db.many(`SELECT * FROM planets ORDER BY id`)
    res.status(200).json({ msg: "success!", planetChart });
  },
  postPlanetImg: async (req, res) =>{
    const {id} = req.params;
    console.log(req);
    // const {image} = req.body
    res.send("OK")
    // await db.none(`UPDATE planets SET image = $2 WHERE id = $1`,[Number(id), image])
    // const planetChart = await db.many(`SELECT * FROM planets ORDER BY id`)
    //res.status(200).json(planetChart);
  }
};

module.exports = mainController;
