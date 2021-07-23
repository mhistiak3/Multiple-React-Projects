import React, { useState } from "react";
import { ChromePicker } from "react-color";
import Input from "./Input";
import classes from './index.module.css'
const Shadow = () => {
  let [click, setClick] = useState(false);
  let [horizontal, setHorizontal] = useState(0);
  let [vertical, setVertical] = useState(0);
  let [blure, setBlure] = useState(0);
  let [spread, setSpread] = useState(0);
  let [color, setColor] = useState("rgba(170,115,115,1)");
  let [set,setSet]=useState(false)

  const handleChangeComplete = (color) => {
    let rgba = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`;
    setColor(rgba);
  };
  const handleClick = () => {
    setClick(!click);
  };
  let withSet = set?'inset':'';
  let style = {
    boxShadow: `${withSet} ${horizontal}px ${vertical}px ${blure}px ${spread}px ${color}`,
  };

  return (
    <div className="container">
      <h2 className="text-center py-3">CSS Shadow Generator</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="rang-box">
         
            <Input
              title="Horizontal"
              value={horizontal}
              handleValue={(e) => setHorizontal(e.target.value)}
            />
            <Input
              title="Vertical"
              value={vertical}
              handleValue={(e) => setVertical(e.target.value)}
            />
            <Input
              title="Blure"
              value={blure}
              handleValue={(e) => setBlure(e.target.value)}
            />
            <Input
              title="Spread"
              value={spread}
              handleValue={(e) => setSpread(e.target.value)}
            />

            {click ? (
              <button className="btn btn-success btn-sm" onClick={handleClick}>
                Hide Picker
              </button>
            ) : (
              <button className="btn btn-success btn-sm" onClick={handleClick}>
                Show Picker
              </button>
            )}

            {click ? (
              <ChromePicker
                color={color}
                onChangeComplete={handleChangeComplete}
              />
            ) : (
              ""
            )}
          </div>
          <div className={classes.checkbox}>
          <label>Outset</label>
            <input type="checkbox" checked={set} onChange={()=>setSet(!set)}/>
            <label>Inset</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className={classes.shadow} style={style}>
            {`box-shadow:${horizontal}px ${vertical}px ${blure}px ${spread}px ${color}`}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Shadow;
