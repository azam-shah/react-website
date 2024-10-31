import React, { useState } from "react";
import { useCart } from "../context/Cart_Context";
import "./Billing.css";
import Footer from "./Footer";

const BillingSection = () => {
  const { cart } = useCart();
  const [itemCounts, setItemCounts] = useState({});

  const incrementCount = (index) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [index]: (prevCounts[index] || 0) + 1,
    }));
  };

  const decrementCount = (index) => {
    setItemCounts((prevCounts) => {
      const newCount = (prevCounts[index] || 0) - 1;
      return {
        ...prevCounts,
        [index]: newCount >= 0 ? newCount : 0,
      };
    });
  };

  return (
    <>
    <div className="billing-section">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="billing-item">
            <div className="image-container">
              <div className="billing-box">
                {/* Render product image if it exists */}
                {item.image ? (
                  <img src={item.image} alt={item.name} />
                ) : (
                  <img src="https://via.placeholder.com/150" alt="Default" /> // Fallback image
                )}
              </div>
            </div>
            <div className="details">
              <h4>{item.name}</h4>
              <p>${item.price !== undefined ? item.price.toFixed(2) : "N/A"}</p>
              <div className="count-btn">
                <button onClick={() => decrementCount(index)} className="plus-btn">-</button>
                <input type="text" value={itemCounts[index] || 0} readOnly />
                <button onClick={() => incrementCount(index)} className="minus-btn">+</button>
              </div>
              <div className="boom">
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
    <Footer/>
    </>
  );
};

export default BillingSection;
