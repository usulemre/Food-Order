import CartIcon from "../Cart/CartIcon";
import classes from './HeaderButton.module.css'
const HeaderButton = () =>{
    return<button className={classes.button}>
        <span className={classes.ıcon}>
            <CartIcon />
        </span>
        <span className={classes.cart}>Your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
}

export default HeaderButton;