import * as fs from "node:fs"

const data = "created using node file system!"
fs.writeFile("file-trial.txt", data, (err)=>{
    if (err) {
        console.log("there has been an error");
        throw err
    }
    console.log("The file has been saved!");
})