//imports
require("dotenv").config(); //traemos archivo .env
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT;
const router = require("./routes/mainRoutes.js")

//middlewares
app.use(express.json()) //permite interpretar los json recibidos por el cliente
app.use(morgan("tiny"))
app.use("/", router)

//execute listen
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
