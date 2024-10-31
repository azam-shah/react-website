import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  cart: []
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };

    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        )
      };

    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
        )
      };

    case 'REMOVE_ITEM':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    default:
      return state;
  }
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider, useCart };
