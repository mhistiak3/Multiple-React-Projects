import React from "react";
function Squere(props) {
  return (
    <button className="square" onClick={props.onClick}>
      <span>{props.value}</span>
    </button>
  );
}
export default Squere;
