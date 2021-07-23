import { useState } from "react";
import FilterInput from "./FilterInput";
import classes from "./style.module.css";
import flowe from "./flowe.jpg";
const Filter = () => {
  let [Grayscale, setGrayscale] = useState(0);
  let [Sepia, setSepia] = useState(0);
  let [Blur, setBlur] = useState(0);
  let [Brightness, setBrightness] = useState(100);
  let [HueRotate, setHueRotate] = useState(0);
  let [Saturate, setSaturate] = useState(100);
  let [Opacity, setOpacity] = useState(100);
  let [Contrast, setContrast] = useState(100);
  let [Invert, setInvert] = useState(0);
  let style = {
    filter: `grayscale(${Grayscale}%) sepia(${Sepia}%) blur(${Blur}px) brightness(${Brightness}%) hue-rotate(${HueRotate}deg) saturate(${Saturate}%) opacity(${Opacity}%) contrast(${Contrast}%) invert(${Invert}%)`,
  };
  const handleCopy = () => {
    const text = document.getElementById('text');

    const textarea = document.createElement('textarea');
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.value = text.innerText;
    document.body.appendChild(textarea);
    
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea)
    alert('Property Copied')
  
  };
  return (
    <div className="container">
      <h2 className="text-center py-4">Css Filter Generator</h2>
      <div className="row justify-content-between">
        <div className="col-5">
          <div className="filterBox">
            <FilterInput
              label="Grayscale"
              value={Grayscale}
              Event={(e) => {
                setGrayscale(e.target.value);
              }}
              max="100"
            />
            <FilterInput
              label="Sepia"
              value={Sepia}
              Event={(e) => {
                setSepia(e.target.value);
              }}
              max="100"
            />
            <FilterInput
              label="Blur"
              value={Blur}
              Event={(e) => {
                setBlur(e.target.value);
              }}
              max="10"
            />
            <FilterInput
              label="Brightness"
              value={Brightness}
              Event={(e) => {
                setBrightness(e.target.value);
              }}
              max="200"
            />
            <FilterInput
              label="Hue Rotate"
              value={HueRotate}
              Event={(e) => {
                setHueRotate(e.target.value);
              }}
              max="360"
            />
            <FilterInput
              label="Saturate"
              value={Saturate}
              Event={(e) => {
                setSaturate(e.target.value);
              }}
              max="1000"
            />
            <FilterInput
              label="Opacity"
              value={Opacity}
              Event={(e) => {
                setOpacity(e.target.value);
              }}
              max="100"
            />
            <FilterInput
              label="Contrast"
              value={Contrast}
              Event={(e) => {
                setContrast(e.target.value);
              }}
              max="1000"
            />
            <FilterInput
              label="Invert"
              value={Invert}
              Event={(e) => {
                setInvert(e.target.value);
              }}
              max="100"
            />
          </div>
        </div>
        <div className="col-6 text-center">
          <div className={classes.filterImage}>
            <img src='https://istiak.ia-coder.com/images/hero-nocap.jpg' alt="" style={style} />
          </div>
          <div className={classes.property} id='text'>
            {`filter: grayscale(${Grayscale}%) sepia(${Sepia}%) blur(${Blur}px) brightness(${Brightness}%) hue-rotate(${HueRotate}deg) saturate(${Saturate}%) opacity(${Opacity}%) contrast(${Contrast}%) invert(${Invert}%)`}
          </div>
          <button className="btn btn-primary btn-sm"  onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
