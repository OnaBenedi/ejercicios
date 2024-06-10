import { useState } from "react";

function Container({ title }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  function onButtonClick(){
    setIsCollapsed(!isCollapsed)
  }
  return (
    <div style={{ background: "white", border: "1px solid red" }}>
      <h1 onClick={onButtonClick}>{title}</h1>
      {!isCollapsed && (
        <div>
          <p>Children showing:</p>
        </div>
      )}
    </div>
  );
}

export default Container;
