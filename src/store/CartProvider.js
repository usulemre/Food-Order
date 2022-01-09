import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const oldCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[oldCartIndex];

    let updateItems;

    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updateItems = [...state.items];
      updateItems[oldCartIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: newTotalAmount,
    };
  }
  if (action.type === "DELETE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const updateAmount = state.totalAmount - existingItem.price;

    let updateItems;
    if (existingItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = { ...existingItem, amount: existingItem.amount - 1 };
      updateItems = [...state.items];
      updateItems[existingItemIndex] = updateItem;
    }
    return {
      items: updateItems,
      totalAmount: updateAmount,
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
