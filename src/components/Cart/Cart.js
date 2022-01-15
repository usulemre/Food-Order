import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartForm from "./CartForm";
const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const addCheckoutHandler = (addData) => {
    setLoading(true);
    fetch(
      "https://costom-hook-4700b-default-rtdb.firebaseio.com/Checkout.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: addData,
          addItem: cartCtx.items,
        }),
      }
    );
    setLoading(false);
    setIsSubmit(true);
    cartCtx.clearCart();
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

  const ModalContext = (
    <React.Fragment>
      {itemList}
      <div className={classes.price}>
        <span>Total Amount</span>
        <span>{totalAmont}</span>
      </div>
      {isCheckout && (
        <CartForm onConfirm={addCheckoutHandler} onClose={props.onClose} />
      )}
      {!isCheckout && actionsButton}
    </React.Fragment>
  );

  const LoadingContext = <h2>Loading....</h2>;

  const Submit = (
    <React.Fragment>
      <h2>Siparişiniz Alındı!....</h2>
      <div className={classes.action}>
        <button className={classes.close} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!loading && !isSubmit && ModalContext}
      {loading && !isSubmit && LoadingContext}
      {isSubmit && !loading && Submit}
    </Modal>
  );
};
export default Cart;
