import React from 'react'
import "./Product.css";
import next from "../images/icons arrow-right (2).svg";
import prev from "../images/icons_arrow-left (1).svg";
import phone from "../images/Category-CellPhone.svg";
import computer from "../images/Category-Computer.svg";
import watch from "../images/Category-SmartWatch.svg";
import camera from "../images/Category-Camera.svg";
import head from "../images/Category-Headphone.svg";
import game from "../images/Category-Gamepad.svg";

function Product() {

    const category = [
        {
            id : "1",
            image : phone,
            tittle : "Phones"
        },
        {
            id : "2",
            image : computer,
            tittle : "Computers"
        },
        {
            id : "3",
            image : watch,
            tittle : "Smart watch"
        },
        {
            id : "4",
            image : camera,
            tittle : "Camera"
        },
        {
            id : "5",
            image : head,
            tittle : "Head phone"
        },
        {
            id : "6",
            image : game,
            tittle : "Gaming"
        }

    ]
  return (
    <>
    <div className='product-container'>
        <div className='product-box'>
            <div className="sale-content">
                <div className="sale-logo"></div>
                <div>
                   <h4>Categories</h4>
                </div>
            </div>

            <div className='cate'>
                <div>
                   <h1>Browse By Category</h1>
                </div>

                <div className='arrows'>
                   <div className='right-arrow'>
                       <img src={prev} alt="Previous" />
                    </div>
                    <div className='left-arrow'>
                       <img src={next} alt="next" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* categries section */}

    <div className='category-container'>
        <div className='category-box'>
          {category.map( (item) => (
            <div key={item.id} className='cate-box'>
                <div className='plan'>
                   <img src={item.image} alt="" className='category-img'/>
                   <h4>{item.tittle}</h4>
                </div>
            </div>
           ))}
        </div>
    </div>





    </>
  )
}

export default Product;
