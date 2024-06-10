import './App.css'
import InteractiveWelcome from './components/controlled-forms/InteractiveWelcome'
import Login from './components/controlled-forms/Login'
import UncontrolledLogin from './components/uncontrolled-forms/UncontrolledLogin'


function App() {

  return (
    <>
    <InteractiveWelcome/>
    <Login/>
    <UncontrolledLogin/>
    </>
  )
}

export default App
