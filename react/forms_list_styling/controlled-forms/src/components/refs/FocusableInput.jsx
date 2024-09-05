import { useEffect } from "react";
import { useRef } from "react"

function FocusableInput() {

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current?.focus()
    }, [])
  return (
    <>
    <label htmlFor="focusable">Focused input:</label>
    <input type="text" name="focusable" ref={inputRef}/>
    </>
  )
}

export default FocusableInput