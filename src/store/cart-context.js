import react from "react";
const CartContext = react.createContext({
  items: [],
  totalAmount: 0,
  addCart: () => {},
  removeCart: () => {},
  clearCart: () => {}
});

export default CartContext;
