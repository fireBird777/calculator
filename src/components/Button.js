import React from "react";
import "./Button.css";
const Button = ({ name,clickHandler,orange,wide }) => {
  const className = [
    "component-button",
    orange ? "orange" : "",
    wide ? "wide" : "",
  ];
  const handleClick = () => {
    clickHandler(name)
  };
  return (
    <div className={className.join(" ").trim()}>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
};


export default Button;
