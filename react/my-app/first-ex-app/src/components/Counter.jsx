import { useState, useEffect } from 'react'
import CounterDisplay from './CounterDisplay'

export function Counter({ initialValue = 0, incrementBy = 1 }) {
	const [counter, setCounter] = useState(initialValue)


	function handleIncrement() {
		setCounter((c) => c + incrementBy)
	}
	function handleDecrement(){
		setCounter((c) => c - incrementBy)
	}
	function resetCounter(){
		setCounter(initialValue)
	}

	useEffect(()=>{
		console.log(`The current value is ${counter}`);
	}, [counter])
	return (
		<div>
			<CounterDisplay count={counter}/>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>
			<button onClick={resetCounter}>Reset</button>
		</div>
	)
}


// An **immediate value** when the next state does NOT depend on the previous state.
// A **function** when the next state depends on the previous state.