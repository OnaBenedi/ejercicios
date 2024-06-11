import { useState } from "react";

function Container({children, title }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  function onButtonClick(){
    setIsCollapsed(!isCollapsed)
  }
  return (
    <div style={{ background: "white", border: "1px solid red" }} className="app">
      <h1 onClick={onButtonClick}>{title}</h1>
      {!isCollapsed && (
        <div>
          <p>{children} Children showing</p>
        </div>
      )}
    </div>
  );
}

export default Container;
