import AlertClock from "./components/events/AlertClock"
import MouseClicker from "./components/handling-events/MouseClicker"
import Hello from "./components/hello/Hello"
import Welcome from "./components/props/Welcome"
import Counter from "./components/state/Counter"
import Clock from "./components/use-effect/Clock"

function App() {
  
  
  return (
    <div>
    <Hello/>
    <Welcome name = "Ona" age={24}/>
    <AlertClock/>
    <Counter/>
    <Clock/>
    <MouseClicker/>
   
    </div>
  )
}

export default App