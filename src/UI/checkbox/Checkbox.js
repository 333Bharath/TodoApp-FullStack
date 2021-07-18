import React,{useState} from "react";
import classes from "./Checkbox.module.css";

const Checkbox = (props) => {

  const click =()=>{
    props.markCompleted()
  }
  return (
    <div className="container">
      <div className={classes.round}>
        <input type="checkbox" id="checkbox" 
         checked={props.completed}
        onChange={click}/>
        <label htmlFor="checkbox"></label>
      </div>
     </div>
  );
};

export default Checkbox;
