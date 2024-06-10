import "./App.css";
import Colors from "./components/colors/Colors";
import TodoList from "./components/lists-state/TodoList";
const colors = [
  { name: "blue", id: 1 },
  { name: "red", id: 2 },
  { name: "green", id: 3 },
  { name: "purple", id: 4 },
  { name: "yellow", id: 5 },
];
const todos = [
  { id: 1, task: "Clean kitchen" },
  { id: 2, task: "Get groceries" },
  { id: 3, task: "Change sheets" },
  { id: 4, task: "Do laundry" },
  { id: 5, task: "Water plants" },
];

function App() {
  return (
    <>
      <Colors arrayColors={colors} />

      <TodoList tasks={todos} />
    </>
  );
}

export default App;
