import React, { createContext, useContext, useReducer } from 'react';

const WishlistContext = createContext();

// Initial state for the wishlist
const initialState = [];

// Wishlist reducer function
const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return [...state, action.payload];
    case 'REMOVE_FROM_WISHLIST':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

// Wishlist provider component
export const WishlistProvider = ({ children }) => {
  const [wishlist, dispatch] = useReducer(wishlistReducer, initialState);

  return (
    <WishlistContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the Wishlist context
export const useWishlist = () => {
  return useContext(WishlistContext);
};

// Export default for the provider
export default WishlistContext;
