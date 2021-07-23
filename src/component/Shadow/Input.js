import React from 'react'

const Input = ({value,handleValue,title}) => {
    return (
        <>
        <label htmlFor="">{title}</label>
          <input
              type="range"
              min="0"
              max="200"
              className="form-range my-3"
              value={value}
             
              onChange={handleValue}
            />  
        </>
    )
}

export default Input
