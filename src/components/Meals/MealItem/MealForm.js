import classes from "./MealForm.module.css";
import Input from "../../UI/Input";
const MealForm = (props) => {
  return (
    <form className={classes.form}>
     <Input input={{
         id:'Amount',
         label:'Amount',
         type:'number',
         min:'1',
         max:'5',
         defaultValue:'1'
     }}/>
      <button>+Add</button>
    </form>
  );
};

export default MealForm;
