import React from 'react'
import "./Footer.css";
import code from "../images/Qr Code.png";
import play from "../images/GooglePlay.png";
import app from "../images/AppStore.png";
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, } from 'react-icons/fa';

function Footer() {
  return (
    <>
    <div className='footer-container'>
        <div className='footer-box'>
            <div className='link1'>
                <h4>Exclusive</h4>
                <div className='phera'>
                  <p>Subscribe</p>
                  <p>Get 10% off your first order</p>
                  <div className='footer-search'>
                    <input type="search" name="name" id="search" placeholder='Enter your email' />
                    <FaArrowRight/>
                  </div>
                </div>
            </div>
            <div className='link1'>
                <h4>Support</h4>
                <div className='phera'>
                  <p>111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</p>
                  <p>exclusive@gmail.com</p>
                  <p>+88015-88888-9999</p>
                </div>
            </div>
            <div className='link2'>
                <h3>Account</h3>
                <ul>
                    <li><a href="/">My Account</a></li>
                    <li><a href="/">Login / Register</a></li>
                    <li><a href="/">Cart</a></li>
                    <li><a href="/">Wishlist</a></li>
                    <li><a href="/">Shop</a></li>
                </ul>
            </div>
            <div className='link2'>
                <h3>Quick Link</h3>
                <ul>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Terms Of Use</a></li>
                    <li><a href="/">FAQ</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
            <div className='link4'>
                <h3>Download App</h3>
                <p>Save $3 with App New User Only</p>
                <div className='graphy'>
                    <div>
                        <img src={code} alt="" />
                    </div>
                    <div className='plays'>
                       <div> <img src={play} alt="" /></div>
                        <div><img src={app} alt="" /></div>
                    </div>
                </div>
                <div className='social-icon'>
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaLinkedin/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;
