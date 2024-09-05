async function recoverToDos() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const toDos = await data.json();
  // let idToDo;
  // toDos.forEach(toDo => {
  //     if(toDo.id == 23){
  //         idToDo = toDo
  //     }
  // });

  const list = toDos.filter((toDo) => {
    return toDo.completed == false;
  });

  return list;
}

recoverToDos()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log("the process is not finished");
  });
