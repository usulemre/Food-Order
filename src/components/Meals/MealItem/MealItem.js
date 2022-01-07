import MealFrom from './MealForm';
import classes from './MealItem.module.css'
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li id={props.id} className={classes.mealItem}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.des}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealFrom />
      </div>
    </li>
  );
};

export default MealItem;