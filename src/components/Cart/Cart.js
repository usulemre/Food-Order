import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmont = `$${cartCtx.totalAmount.toFixed(2)}`;
  const orderCart = cartCtx.items.length > 0;

  const addCartHandler = () => {};

  const deleteCartHandler = () => {};

  const itemList = (
    <ul className={classes.item}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onDelete={addCartHandler}
          onUpdate={deleteCartHandler}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {itemList}
      <div className={classes.price}>
        <span>Total Amount</span>
        <span>{totalAmont}</span>
      </div>
      <div className={classes.action}>
        <button className={classes.close} onClick={props.onClose}>
          Close
        </button>
        {orderCart && <button className={classes.order}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
