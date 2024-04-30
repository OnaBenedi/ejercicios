const number = 15;

const num = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(`The temperature is really high`);
  } else {
    reject(`The temperature is not higher than 10 degrees`);
  }
});

num.then((response) => {console.log(response);}).catch((err)=>{console.error(err);});
