import React, { useEffect, useState, useContext } from 'react';
import './Sellbox.css';
import axios from 'axios';
import heart from "../images/heart small.svg";
import view from "../images/Quick View.svg";
import { useCart } from "../context/Cart_Context"; // Updated import
import { useNavigate } from "react-router-dom";
import WishlistContext from "../context/WishlistContext"; // Ensure this import is correct
import Skeleton from 'react-loading-skeleton';

function Sellbox() {
  const { addToCart } = useCart();
  const { wishlist, dispatch } = useContext(WishlistContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const color = "red"; 
    const amount = 0;
    addToCart(product, color, amount);
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleViewAllClick = () => {
    navigate("/Remaining");
  };

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        // Fix: Access the 'products' array inside the response data
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
      <div className='sell-container'>
        <div className='sell-box'>
          <div className='sale-content'>
            <div className='sale-logo'></div>
            <div>
              <h4>This Month</h4>
            </div>
          </div>
          <div className='button-box'>
            <div>
              <h1>Best Selling Products</h1>
            </div>
            <div>
              <button type='button' id='view-btn' onClick={handleViewAllClick}>View all</button>
            </div>
          </div>
        </div>
      </div>

      {/* sell section */}
      <div className='sell-container2'>
        <div className='sell-box2'>
          {loading ? (
            [...Array(4)].map((_, index) => (
              <div key={index} className='card1'>
                <Skeleton height={200} />
                <Skeleton width="60%"/>
                <Skeleton width="80%" />
              </div>
            ))
          ) : (
            products.slice(0, 4).map((product) => (
              <div key={product.id} className='cards'>
                <div className='card1'>
                  <div className='images'>
                    <div className='img1'>
                      <img
                        src={heart}
                        alt="wishlist"
                        onClick={() => handleWishlistToggle(product)} 
                        className={isInWishlist(product) ? 'wishlist-icon active' : 'wishlist-icon'}
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                    <div className='img2'>
                      <img src={view} alt="quick view" />
                    </div>
                  </div>
                  <img src={product.images} alt={product.title} className='sell-img' />
                  <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
                <h3>{product.title}</h3>
                <span className="current-price">${product.price}</span>
                <div className="ratings">{product.rating} ★★★★★</div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Sellbox;
