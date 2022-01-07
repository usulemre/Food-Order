import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addCartHandler = (items) => {};
  const deleteCartHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
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
