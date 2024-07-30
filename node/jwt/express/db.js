const pgPromise = require("pg-promise");

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/users");
//postgres://postgres:contraseña@localhost:puerto/basedatos

async function setUpDb() {
  await db.none(`
    DROP TABLE IF EXISTS planets;
    CREATE TABLE planets(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
    );
    
    DROP TABLE IF EXISTS users;
    CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    token TEXT
    )
    `);
  await db.none(`INSERT INTO planets (name) VALUES ('earth')`);

  await db.none(`INSERT INTO planets (name) VALUES ('mars')`);

  await db.none(`INSERT INTO users (username, password) VALUES ('dummy', 'dummy')`);

  const planets2 = await db.many(`SELECT * FROM planets`);

  console.log(planets2);
}

setUpDb() //cada vez que se modifica el documento se recarga, si se comenta no se recarga

module.exports = db