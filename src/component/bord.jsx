import React from "react";
import Squere from "./square";

function Borde(props) {
  const rnderSquere = (i) => {
    return (
      <Squere
        value={props.squeres[i]}
        onClick={() => {
          props.onClick(i);
        }}
      />
    );
  };
  return (
    <div className="main-bord">
      <div className="board-row">
        {rnderSquere(1)}
        {rnderSquere(2)}
        {rnderSquere(3)}
      </div>
      <div className="board-row">
        {rnderSquere(4)}
        {rnderSquere(5)}
        {rnderSquere(6)}
      </div>
      <div className="board-row">
        {rnderSquere(7)}
        {rnderSquere(8)}
        {rnderSquere(9)}
      </div>
    </div>
  );
}

export default Borde;
