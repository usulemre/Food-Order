import React from "react";
import classes from "./Modal.module.css";
import reactDom from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const Overlay = (props) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const elements = document.getElementById("overlay");
  return (
    <React.Fragment>
      {reactDom.createPortal(<BackDrop />, elements)}
      {reactDom.createPortal(<Overlay>{props.children}</Overlay>, elements)}
    </React.Fragment>
  );
};

export default Modal;
