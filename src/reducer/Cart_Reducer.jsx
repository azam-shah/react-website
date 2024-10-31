const Cart_Reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, color, amount, product } = action.payload;

    const existingProduct = state.cart.find(item => item.id === id + color);

    if (existingProduct) {
      const updatedCart = state.cart.map(item => {
        if (item.id === id + color) {
          return { ...item, amount: item.amount + amount };
        }
        return item;
      });
      return { ...state, cart: updatedCart };
    } else {
      const cartProduct = {
        id: id + color, 
        color: color,
        amount: amount,
        image: product.images && product.images.length > 0 ? product.images[0] : "",
        price: product.price,
        name: product.title
      };

      return { ...state, cart: [...state.cart, cartProduct] };
    }
  }

  return state;
};

export default Cart_Reducer;
