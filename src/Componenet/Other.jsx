import React from 'react'
import tap from "../images/Frame 694.png";
import "./Other.css";

function Other() {
  return (
    <div className='other-container'>
        <div className='other-box'>
            <div className='other-details'>
                <h3>Categories</h3>
                <h1>Enhance Your Music Experience</h1>
                <div className='other-timer'>
                    <div className='other-count'>
                        <h4>23</h4>
                        <p>Hourse</p>
                    </div>
                    <div className='other-count'>
                        <h4>05</h4>
                        <p>Days</p>
                    </div>
                    <div className='other-count'>
                        <h4>59</h4>
                        <p>Minutes</p>
                    </div>
                    <div className='other-count'>
                        <h4>35</h4>
                        <p>Seconds</p>
                    </div>
                </div>
                <button type='btn' id='more-btn'>Buy Now!</button>
            </div>
            <div className='other-image'>
                <img src={tap} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Other;
