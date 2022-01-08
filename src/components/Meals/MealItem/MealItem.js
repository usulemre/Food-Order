import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealFrom from "./MealForm";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addCartHandler = (amount) => {
    ctx.addCart({
      id: props.id,
      name: props.name,
      price: props.price.toFixed(2),
      amount: amount,
    });
  };

  return (
    <li id={props.id} className={classes.mealItem}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.des}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealFrom id={props.id} onAddCart={addCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
