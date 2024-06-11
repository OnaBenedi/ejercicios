import { useContext } from "react";
import { useEffect, useRef, useState } from "react";
import { LanguageContext } from "./LanguageContext";

function Clock() {
 const language =  useContext(LanguageContext);
  const [time, setTime] = useState(new Date());

  const clockRef = useRef(false); //stablish the ref
  useEffect(() => {
    if (!clockRef.current) {
      clockRef.current = true;
      console.log("Mounting for the first time");
    } else {
      console.log("Mounting again for debug purposes");
    }
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <h2>{language === "en" ?"The current hour is:" : "L'ora attuale è:"} {time.toLocaleTimeString()}</h2>
  );
}



export default Clock;
