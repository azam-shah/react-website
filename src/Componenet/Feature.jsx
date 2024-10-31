import React from 'react'
import "./Feature.css"
import pho1 from "../images/Group 1000005941.png";
import pho2 from "../images/Group 1000005942.png";
import pho3 from "../images/Group 1000005943.png";
import pho4 from "../images/Group 1000005944.png";

function Feature() {
  return (
    <div className='feature-container'>
        <div className='feature-box'>
            <div className='sale-content'>
              <div className="sale-logo"></div>
              <div>
                <h4>Features</h4>
              </div>
            </div>
            <div className='head'><h2>New Arrival</h2></div>

            <div className='images-container'>
                <div>
                    <div>
                      <img src={pho1} alt="" />
                    </div>
                    <div className='pho1-details'>
                        <h4>PlayStation 5</h4>
                        <p>Black and White version of the PS5 coming out on sale.</p>
                        <a href="/">Shop Now</a>
                    </div>
                </div>
                <div>
                    <div className='imm'>
                        <div>
                            <img src={pho2} alt="" />
                        </div>
                        <div  className='pho2-details'>
                        <h4>Women’s Collections</h4>
                        <p>Featured woman collections that give you another vibe.</p>
                        <a href="/">Shop Now</a>
                        </div>
                    </div>
                    <div className='images-box'>
                    <div className='imm2'>
                        <div>
                            <img src={pho3} alt="" />
                        </div>
                        <div  className='pho3-details'>
                        <h4>Speakers</h4>
                        <p>Amazon wireless speakers</p>
                        <a href="/">Shop Now</a>
                        </div>
                    </div>
                    <div className='imm3'>
                        <div>
                            <img src={pho4} alt="" />
                        </div>
                        <div  className='pho4-details'>
                        <h4>Perfume</h4>
                        <p>GUCCI INTENSE OUD EDP</p>
                        <a href="/">Shop Now</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature;
