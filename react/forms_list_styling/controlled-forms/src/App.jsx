import './App.css'
import InteractiveWelcome from './components/controlled-forms/InteractiveWelcome'
import Login from './components/controlled-forms/Login'
import FocusableInput from './components/refs/FocusableInput'
import Counter from './components/state/Counter'
import UncontrolledLogin from './components/uncontrolled-forms/UncontrolledLogin'
import Clock from "./components/use-effect/Clock"

function App() {

  return (
    <>
    <InteractiveWelcome/>
    <Login/>
    <UncontrolledLogin/>

    <FocusableInput/>
    <Clock/>
    <Counter/>
    </>
  )
}

export default App
