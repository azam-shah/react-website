import React, { useContext, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { CartContext } from '../context/Cart_Context';
import "./Cart.css";
import Footer from './Footer';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const [coupon, setCoupon] = useState('');
  const [isCouponApplied, setIsCouponApplied] = useState(false); // To track if the coupon is applied

  const increaseQuantity = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleApplyCoupon = () => {
    if (coupon) {
      setIsCouponApplied(true);
    }
  };

  const calculateDiscount = () => {
    const subtotal = calculateSubtotal();
    return isCouponApplied ? subtotal * 0.10 : 0; // 10% discount if coupon is applied
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    const shippingFee = 5;
    return subtotal - discount + shippingFee;
  };

  return (
    <>
      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.images} alt={item.title} className="cart-item-image" />
                  <div>{item.title}</div>
                </td>
                <td>₹{item.price.toFixed(2)}</td>
                <td>
                  <button onClick={() => decreaseQuantity(item.id)} className='minus-btn'>-</button>
                  <input type="text" value={item.quantity} className='inpat' readOnly />
                  <button onClick={() => increaseQuantity(item.id)} className='plus-btn'>+</button>
                </td>
                <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <FaTrash onClick={() => removeItem(item.id)} className="remove-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cart-actions">
          <button className="continue-shopping-btn">CONTINUE SHOPPING</button>
          <button className="clear-cart-btn" onClick={clearCart}>CLEAR CART</button>
        </div>

            <div className='coupon'>
              <input 
                type="text" 
                placeholder="Coupon Code" 
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button onClick={handleApplyCoupon} id='coupon-btn'>Apply Coupon</button>
            </div>

        <div className="cart-summary">
          <div className='carts'>

            <div className='total'>
              <p>Subtotal:</p>
              <p>₹{calculateSubtotal().toFixed(2)}</p>
            </div>
            {isCouponApplied && (
              <div className='total'>
                <p>Discount (10%):</p>
                <p>- ₹{calculateDiscount().toFixed(2)}</p>
              </div>
            )}
            <div className='total'>
              <p>Shipping Fee:</p>
              <p>₹5.00</p>
            </div>
            <div className='total'>
              <p>Order Total:</p>
              <p>₹{calculateTotal().toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
