import React, { useState, useEffect , useContext } from 'react';
import axios from 'axios';
import heart from "../images/heart small.svg";
import view from "../images/Quick View.svg";
import { useCart } from "../context/Cart_Context";
import Skeleton from 'react-loading-skeleton';
import "./Remaining.css";
import Footer from './Footer';
import WishlistContext from '../context/WishlistContext';

function Remaining() {
  const { addToCart } = useCart();
  const { wishlist, dispatch } = useContext(WishlistContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state


  const handleAddToCart = (product) => {
    const color = "red"; // Hardcoded for now, change as needed
    const amount = 1; // Default amount of 1
    addToCart(product, color, amount); // Pass product, color, and amount
  };

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const isInWishlist = (product) => {
    return wishlist.some(item => item.id === product.id);
  };

  const handleWishlistToggle = (product) => {
    if (isInWishlist(product)) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product });
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
  };

  return (
    <>
    <div className='remaining-container'>
      <div className='sell-box2'>
        {loading ? (
          [...Array(10)].map((_, index) => (
            <div key={index} className='card1'>
              <Skeleton height={200} />
                <Skeleton width={`60%`} />
                <Skeleton width={`80%`} />
            </div>
          ))
        ) : (
          products.map((product) => (
            <div key={product.id} className='cards'>
              <div className='card1'>
                <div className='images'>
                  <div className='img1'><img src={heart} alt="" onClick={() => handleWishlistToggle(product)} 
                        className={isInWishlist(product) ? 'wishlist-icon active' : 'wishlist-icon'}
                        style={{ cursor: 'pointer' }}/></div>
                  <div className='img2'><img src={view} alt="" /></div>
                </div>
                <img src={product.images} alt={product.title} className='sell-img' />
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add To Cart</button>
              </div>
              <h3>{product.title}</h3>
              <span className="current-price">${product.price}</span>
              <p>{product.rating}</p>
            </div>
          ))
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Remaining;
