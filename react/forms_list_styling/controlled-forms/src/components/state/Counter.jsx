import { useEffect, useRef, useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue = 0, incrementBy = 1 }) {
  const [counter, setCounter] = useState(initialValue);

   const counterRef = useRef({direction: ""});
  

  function incrementCount() {
    setCounter((c) => c + incrementBy);
    counterRef.direction = "up"
    console.log(counterRef.direction);
  }

  function decrementCount() {
    setCounter((c) => c - incrementBy);
    counterRef.direction = "down"
    console.log(counterRef.direction);
  }

  function resetCount() {
    setCounter(initialValue);
  }

  useEffect(() => {
    console.log(`The current value is ${counter}`);
  }, [counter]);
  
  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={incrementCount}>Increment count</button>
      <button onClick={decrementCount}>Decrement count</button>
      <button onClick={resetCount}>Reset count</button>
    </div>
  );
}

export default Counter;
