import React from "react";
import classes from "./CartItem.module.css";
const CartItem = (props) => {
  const price = `$${props.price}`;
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.header}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={classes.action}>
        <button className={classes.delete}>-</button>
        <button className={classes.update}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
