import { useRef } from "react";
import classes from "./MealForm.module.css";
import Input from "../../UI/Input";

const MealForm = (props) => {
  const amountRef = useRef();

  const addCartAmount = (event) => {
    event.preventDefault();
    const amountrefText = amountRef.current.value;
    const amountrefNumber = +amountrefText;
    if (
      amountrefText.trim().length === 0 ||
      amountrefNumber < 1 ||
      amountrefNumber > 5
    ) {
      return;
    }
    props.onAddCart(amountrefNumber);
  };

  return (
    <form className={classes.form} onSubmit={addCartAmount}>
      <Input
        label="Amount"
        ref={amountRef}
        input={{
          id: "Amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default MealForm;
