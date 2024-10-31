import React from 'react'
import image0 from "../images/Services (4).png";
import image1 from "../images/Services (5).png";
import image2 from "../images/Services (6).png";

function Last() {

    const boom = [
        {
          id : "1",
          image : image0,
          title : "FREE AND FAST DELIVERY",
          description : "Free delivery for all orders over $140"
        },
        {
          id : "2",
          image : image1,
          title : "24/7 CUSTOMER SERVICE",
          description : "Friendly 24/7 customer support"
        },
        {
          id : "3",
          image : image2,
          title : "MONEY BACK GUARANTEE",
          description : "We reurn money within 30 days"
        }
       ];


  return (
    <div className='boom-container'>
      <div className='boom-box'>
        {boom.map((item) => (
          <div key={boom.id}>
            <div className='boom-details'>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Last;
