function MouseClicker() {
    function printName(event){
        console.log(event.target.name)
    }
    function printImgSrc (event){
        event.stopPropagation()
        console.log(event.target.src);
    }

  return (
    <>
      <button name="one" onClick ={printName}> Click me!
        <img src="https://picsum.photos/200" alt="randompic" name="picture" onClick={printImgSrc}/>
      </button>
    </>
  );
}

export default MouseClicker;
