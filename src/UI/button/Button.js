import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <React.Fragment>
      <button className={[classes.Button,classes[props.btnType]].join(" ")} onClick={props.onButtonHandler}>
        {props.children}
      </button>
    </React.Fragment>
  );
};

export default Button;
