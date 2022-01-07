import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
const HeaderButton = (props) => {
  const cartCtx = useContext(CartContext);
  const cartLength = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onShow}>
      <span className={classes.ıcon}>
        <CartIcon />
      </span>
      <span className={classes.cart}>Your Cart</span>
      <span className={classes.badge}>{cartLength}</span>
    </button>
  );
};

export default HeaderButton;
