import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newCartItem = state.items.concat(action.item);
    const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items:newCartItem,
      totalAmount:newTotalAmount
    };
  }
  return defaultCart;
};

const CartProvider = (props) => {
  const [carStateItem, dispatchCart] = useReducer(cartReducer, defaultCart);
  const addCartHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const deleteCartHandler = (id) => {
    dispatchCart({ type: "DELETE", id: id });
  };
  const cartContext = {
    items: carStateItem.items,
    totalAmount: carStateItem.totalAmount,
    addCart: addCartHandler,
    removeCart: deleteCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
