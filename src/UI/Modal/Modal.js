import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop"

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.closeModal} />
      <div className={classes.Modal}>
        <p>{props.children}</p>
      </div>
    </React.Fragment>
  );
};

export default Modal;
