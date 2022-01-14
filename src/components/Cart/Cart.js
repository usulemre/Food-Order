import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartForm from "./CartForm";
const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmont = `$${cartCtx.totalAmount.toFixed(2)}`;
  const orderCart = cartCtx.items.length > 0;

  const addCartHandler = (item) => {
    cartCtx.addCart(item);
  };

  const deleteCartHandler = (id) => {
    cartCtx.removeCart(id);
  };

  const CheckoutHandler = () => {
    setIsCheckout(true);
  };

  const itemList = (
    <ul className={classes.item}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onDelete={deleteCartHandler.bind(null, item.id)}
          onUpdate={addCartHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const actionsButton = (
    <div className={classes.action}>
      <button className={classes.close} onClick={props.onClose}>
        Close
      </button>
      {orderCart && (
        <button className={classes.order} onClick={CheckoutHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {itemList}
      <div className={classes.price}>
        <span>Total Amount</span>
        <span>{totalAmont}</span>
      </div>
      {isCheckout && <CartForm onClose={props.onClose}/>}
      {!isCheckout && actionsButton}
    </Modal>
  );
};
export default Cart;
