import { useState } from "react";
import "./App.css";
import Container from "./components/composition/Container";
import Clock from "./components/context/Clock";
import { LanguageContext } from "./components/context/LanguageContext";

function App() {
  const [language, setLanguage] = useState("en")

  function handleSetLanguage(language){
    setLanguage(language)
  }
  return (
    <>
      <Container title={"Ejercicio:"}>
        <p>More children</p>
        <p>This is a test!</p>
      </Container>

      <LanguageContext.Provider value={language}>
        <Clock/>
      </LanguageContext.Provider>
      <button onClick={()=>handleSetLanguage("it")}>IT</button>
      <button onClick={()=>handleSetLanguage("en")}>EN</button>
    </>
  );
}

export default App;
