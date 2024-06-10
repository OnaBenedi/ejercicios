import Color from "../color/Color";

function Colors({arrayColors}) {

  const newColorsList = arrayColors.map((color, index) => (
    <Color key={index} color={color}/>
  ));
  return (
    <div>
      <h2>Arranged colors:</h2>
      <ul>{newColorsList}</ul>
    </div>
  );
}

export default Colors;
