import { useEffect, useState } from "react";

function TodoList() {
  const [toDoState, setToDoState] = useState([
    { id: 1, task: "Clean kitchen" },
    { id: 2, task: "Get groceries" },
    { id: 3, task: "Change sheets" },
    { id: 4, task: "Do laundry" },
    { id: 5, task: "Water plants" },
  ]);

  const [inputToDo, setInputToDo] = useState({})

  function handleInputToDo (event){
    setInputToDo({id: "x", task: event.target.value})
    console.log(inputToDo);
  }

  function addNewToDo(event) {
    setToDoState((currentItems)=>[...currentItems, inputToDo])
    setInputToDo({task: ""}) //this step clears the input when the new task is submitted
  }

  function removeToDo(i){
    const toDoWithoutRemoved = toDoState.filter((item, arrayIndex)=>arrayIndex !== i)
    setToDoState(toDoWithoutRemoved)
  }

  function resetList (){
    setToDoState([])
  }
  return (
    <div>
      <h2>Pending To-Do:</h2>
      <ul>
        {toDoState.map((task, index) => {
          return <div key={index}><li>{task.task}</li>
          <button onClick={()=>removeToDo(index)}>Remove task</button></div>;
        })}
      </ul>
      <input type="text" name="inputNewToDo" onChange={handleInputToDo} value={inputToDo.task}/>
      <button onClick={addNewToDo}>Add new To-Do</button>
      <button onClick={resetList}>Reset list</button>
    </div>
  );
}

export default TodoList;
