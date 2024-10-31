import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUserCircle , FaHeart } from 'react-icons/fa';
import { signOut } from 'firebase/auth';  
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/Cart_Context';  
import { useWishlist } from '../context/WishlistContext';
import { auth } from '../firebase'; 
import heart from "../images/Vector.svg";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [user, setUser] = useState(null);
  const { cart } = useCart();  
  const { wishlist } = useWishlist();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/Login');
    window.location.reload();
  };

  return (
    <div className="navbar-container">
      <div className="navbar-box">
        <h1 className="navbar-logo">Exclusive</h1>
        
        <div className="navbar-links">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            {user ? (
              <li><Link to="/about" onClick={handleLogout}>LogOut</Link></li>
            ) : (
              <li><Link to="/signup">Sign Up</Link></li>
            )}
          </ul>
        </div>

        <div className="navbar-icons">
          <div className='search-bar'>
            <input type="text" placeholder="Search..." /> 
            <FaSearch className='search-icon' />
          </div>
          <div className='icons'>
            <div className='wishlist-icon-container'>
              <Link to="/wishlist">
                <span className="wishlist-icon"><img src={heart} alt="" /></span>
                {wishlist.length > 0 && <span className="wishlist-item-count">{wishlist.length}</span>}
              </Link>
            </div>
            <div className='cart-icon-container'>
              <Link to="/cart">
                <FaShoppingCart className='cart-icon' />
                {cart.length > 0 && <span className="cart-item-count">{cart.length}</span>}
              </Link>
            </div>
            <div className='profile-dropdown-container'>
              <FaUserCircle className='profile-icon' onClick={toggleDropdown} />
              {isOpen && (
                <div className="dropdown-menu">
                  <ul>
                    <li><FaUserCircle /> Manage My Account</li>
                    <li><FaShoppingCart /> My Order</li>
                    <li><FaShoppingCart /> My Cancellations</li>
                    <li><FaHeart /> My Reviews</li>
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
