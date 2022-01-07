import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const itemList = [{ id: 1, price: 5, name: "nike" }].map((item) => (
    <li key={item.id} className={classes.item}>
      <ul>{item.name}</ul>
    </li>
  ));
  return (
    <Modal onClose={props.onClose}>
      {itemList}
      <div className={classes.price}>
        <span>Total Amount</span>
        <span>29.99$</span>
      </div>
      <div className={classes.action}>
        <button className={classes.close} onClick={props.onClose}>Close</button>
        <button className={classes.order}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
