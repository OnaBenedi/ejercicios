function MouseClicker() {
    function handleButtonClick(event){
        console.log(event.target.name)
    }

    function srcPrinter(event){
      event.stopPropagation()
      console.log(event.target.src);
    }

  return (
    <div>
        <button onClick={handleButtonClick} name="one">Click me and check the console!
        <img src="https://picsum.photos/200" alt="square-img" onClick={srcPrinter} /></button>
    </div>
  )
}

export default MouseClicker