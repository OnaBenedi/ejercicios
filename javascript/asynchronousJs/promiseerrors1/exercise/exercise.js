const isLogged = true;

const checkLog = new Promise ((resolve, reject)=>{
    if(isLogged){
        resolve(Math.random().toFixed(1))
    } else {
        reject(new Error ("The user isn't logged"))
    }
})

checkLog.then((res) => console.log(res)).catch((err) => console.error(err));

const secondCheckLog = (number) => {
    return new Promise ((resolve, reject)=>{
        if(number > 0.5){
            resolve({name: "John", age: 24})
        } else {
            reject(Error ("The number is smaller than 0.5 or equal."))
        }
    })
}

checkLog.then((response)=> secondCheckLog(response)).then((response)=>console.log(response)).catch((err) => console.error(err)).finally(()=>{
    console.log("The process is finished, run the code again");
})

