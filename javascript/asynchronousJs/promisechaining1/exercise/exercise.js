const isLogged = true;

const checkLog = new Promise ((resolve, reject)=>{
    if(isLogged){
        resolve(Math.random().toFixed(1))
    } else {
        reject("error")
    }
})

checkLog.then((res) => console.log(res)).catch((err) => console.error(err));

const secondCheckLog = (number) => {
    return new Promise ((resolve, reject)=>{
        if(number > 0.5){
            resolve({name: "John", age: 24})
        } else {
            reject("error")
        }
    })
}

checkLog.then((response)=> secondCheckLog(response)).then((response)=>console.log(response)).catch((err) => console.error(err));
