import { useEffect, useRef, useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue = 0, incrementBy = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  // const counterRef = useRef(0);
  // useEffect(()=>{
  //   if (counterRef.current + 1) {
  //     console.log("up");
  //   }
  // }, [counter])

  function incrementCount() {
    setCounter((c) => c + incrementBy);
  }

  function decrementCount() {
    setCounter((c) => c - incrementBy);
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
