import { useEffect, useState } from "react";
import Clock from "./Clock";
import Todo from "./Todo";

const Main = () => {
   //   Get
   let [timeManage, setTimemanage] = useState("");

   useEffect(() => {
    if (new Date().getHours() <= 19 && new Date().getHours() >= 15) {
      setTimemanage("Evening");
    } else if (new Date().getHours() > 21 || new Date().getHours() <= 4) {
      setTimemanage("Night");
    } else if (new Date().getHours() > 4 && new Date().getHours() < 12) {
      setTimemanage("Morning");
    }
    else if (new Date().getHours() < 15 && new Date().getHours() >= 12) {
       setTimemanage("Afternoon");
    }
  }, []);
  let style = {
    background:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),url(https://source.unsplash.com/1600x900/?neture,Good-${timeManage})`,
  }
  return (
    <div className="app" style={style}>
      <div className="container">
        <Clock timeManage={timeManage} />
        <Todo/>
      </div>
    </div>
  );
};

export default Main;
