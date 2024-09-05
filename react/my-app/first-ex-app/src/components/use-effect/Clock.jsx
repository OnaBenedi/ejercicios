import { useEffect, useRef, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  const clockRef = useRef(false); //stablish the ref
  useEffect(() => {
    if(!clockRef.current){
      clockRef.current = true
      console.log("Mounting for the first time");
    } else{
      console.log("Mounting again for debug purposes");
    }
    const id = setInterval(() => {
      setTime(new Date());
      
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <h2 className="clock">The current hour is: {time.toLocaleTimeString()}; check console to see useRef used to control how many times this component has been mounted</h2>;
}

export default Clock;
