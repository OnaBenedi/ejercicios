import Age from "./Age";

function Welcome({ name = "John", age }) {
  return (
    <>
      <div className="welcome">
        <p>Welcome <strong>{name}</strong>!</p>
        <Age edad={age}/>
        {age>18 && <Age edad={age}/>}
        {age && <Age edad={age}/>}
        {age>18 && age<65 && <Age edad={age}/>}
        {age>18 && age<65 && name === "John" && <Age edad={age}/>}
      </div>
    </>
  );
}

export default Welcome;
