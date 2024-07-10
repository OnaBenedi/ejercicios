//const bringServer = require("node:http");
const figlet = require("figlet");

// const server = bringServer((req, res)=>{

figlet("Hello Ona!!", function (err, data) {
  if (err) {
    console.log("There was an error.");
    console.dir(err);
    return;
  }
  console.log(data);
});
// })

// server.listen(3000, ()=>{
//     console.log(`Server running at http://localhost:3000`);
// })
