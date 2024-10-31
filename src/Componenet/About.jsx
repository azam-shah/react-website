import React from 'react'
import side from "../images/Side Image (4).png";
import service1 from "../images/Services.png";
import service2 from "../images/Services (1).png";
import service3 from "../images/Services (2).png";
import service4 from "../images/Services (3).png";
import person from "../images/Frame 874.png";
import person1 from "../images/Frame 875 (1).png";
import person2 from "../images/Frame 876.png";
import icon from "../images/Icon-Twitter.png";
import icon1 from "../images/icon-instagram.png";
import icon2 from "../images/Icon-Linkedin.png";
import image0 from "../images/Services (4).png";
import image1 from "../images/Services (5).png";
import image2 from "../images/Services (6).png";
import "./About.css";
import Footer from './Footer';


function About() {

  const image = [{
    id : "1",
    img : side,
    title : "Our Story",
    description : "Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. ",
    pera : "Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer."
  }];



  const service = [{
    id : "1",
    image : service1,
    title : "10.5k ",
    description : "Sallers active our site"
  },
  {
    id : "2",
    image : service2,
    title : "33k",
    description : "Mopnthly Produduct Sale"
  },
  {
    id : "3",
    image : service3,
    title : "45.5k",
    description : "Customer active in our site"
  },
  {
    id : "4",
    image : service4,
    title : "25k ",
    description : "Anual gross sale in our site"
  }
  ];

  const expert = [{
    id : "1",
    image : person,
    title : "Tom Cruise",
    description : "Founder & Chairman",
    img : icon,
    img2 : icon1,
    img3 : icon2
  },
  {
    id : "2",
    image : person1,
    title : "Emma Watson",
    description : "Managing Director",
    img : icon,
    img2 : icon1,
    img3 : icon2
  },
  {
    id : "3",
    image : person2,
    title : "Will Smith",
    description : "Product Designer",
    img : icon,
    img2 : icon1,
    img3 : icon2
  }
 ];

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
 ]

  return (
    <>
    <div className='about-container'>
      <div className='about-box'>
        {image.map((item) => (
          <div key={image.id} className='hero-section'>
            <div className='about-details'>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p>{item.pera}</p>
            </div>
            <div className='about-img'>
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>


    <div className='service-container'>
      <div className='service-box'>
        {service.map((item) => (
          <div key={service.id} className='service-details'>
            <div className='service-pera'>
              <div><img src={item.image} alt="" /></div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='expert-container'>
      <div className='expert-box'>
        {expert.map((item) => (
          <div key={expert.id} className='boo'>
            <div className='main-img'>
              <img src={item.image} alt="" />
            </div>
            <div className='expert-details'>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className='icons'>
                <div><img src={icon} alt="" /></div>
                <div><img src={icon1} alt="" /></div>
                <div><img src={icon2} alt="" /></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

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

    <Footer/>



















    </>
  )
}

export default About;
