import React, { useState, useEffect } from "react";

const Clock = ({timeManage}) => {
  let [Time, setTime] = useState(new Date().toLocaleTimeString());
 
  let getName = localStorage.getItem("name")
    ? localStorage.getItem("name")
    : "Duble Click To Add Name";
  let [name, setName] = useState(getName);

  //   Time
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

 

  //   Name
  const handleDBLClick = () => {
    let name = prompt("Enter Name");
    localStorage.setItem("name", name==null?'Name':name);
    let nweName = localStorage.getItem("name");
    setName(nweName);
  };
  return (
    <div>
      <h1 className="clock">{Time}</h1>
      <h2 className="timeManage">
        Good {timeManage}{" "}
        <span className="name" onDoubleClick={handleDBLClick}>
          {name}
        </span>
      </h2>
    </div>
  );
};

export default Clock;
