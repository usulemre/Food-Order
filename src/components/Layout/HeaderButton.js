import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
const HeaderButton = (props) => {
  const [anımasyonButton, setAnımasyonButton] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const cartLength = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${anımasyonButton ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setAnımasyonButton(true);
    const timer = setTimeout(() => {
      setAnımasyonButton(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span className={classes.ıcon}>
        <CartIcon />
      </span>
      <span className={classes.cart}>Your Cart</span>
      <span className={classes.badge}>{cartLength}</span>
    </button>
  );
};

export default HeaderButton;
