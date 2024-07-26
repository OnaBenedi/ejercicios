//imports
require("dotenv").config(); //traemos archivo .env
require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT;
const router = require("./routes/mainRoutes.js")

//middlewares
app.use(express.json()) //permite interpretar los json recibidos por el cliente
app.use(morgan("tiny"))
app.use("/", router)
app.use((err, req, res, next)=>{
  console.error(err.stack)
  res.status(500).send({error: err.message})
})

//execute listen
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
