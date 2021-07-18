import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  let content = null;

  if (props.show) {
    content = <div className={classes.Backdrop} onClick={props.clicked}  ></div>;
  }

  return content;
};

export default Backdrop;
