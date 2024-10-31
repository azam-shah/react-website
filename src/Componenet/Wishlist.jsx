import React, { useContext } from 'react';
import WishlistContext from "../context/WishlistContext"; // Ensure this import is correct
import Footer from './Footer';
import "./Wishlist.css"

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <>
    <div className='wishlist-container'>
      <div className='wishlist-box1'>
      
      {wishlist.length === 0 ? (
        <h2>Your Wishlist</h2>
      ) : (
        wishlist.map((item) => (
          <div key={item.id} >
            <div className='wishlist-box'>
            <img src={item.images} alt={item.name} />
            <h4>{item.title}</h4>
            <p>${item.price.toFixed(2)}</p>
            <p>{item.rating} ★★★★★</p>
            </div>
          </div>
        ))
      )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Wishlist;
