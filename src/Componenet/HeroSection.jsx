import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import iphone from '../images/Frame 560 (1).png';
import apple from "../images/Apple.svg";
import arrow from '../images/Vector (1).svg';
import "./HeroSection.css";


const linkData = [
  { id: 1, label: "Woman’s Fashion", link: "/", hasArrow: true },
  { id: 2, label: "Sports & Outdoor", link: "/", hasArrow: true },
  { id: 3, label: "Electronics", link: "/", hasArrow: false },
  { id: 4, label: "Home & Lifestyle", link: "/", hasArrow: false },
  { id: 5, label: "Medicine", link: "/", hasArrow: false },
  { id: 6, label: "Health & Beauty", link: "/", hasArrow: false },
  { id: 7, label: "Baby’s & Toys", link: "/", hasArrow: false },
  { id: 8, label: "Groceries & Pets", link: "/", hasArrow: false },
  { id: 9, label: "Men's Fashion", link: "/", hasArrow: false },
];

const sliderdata = [
  {
    id: '1',
    image: iphone,
    title: 'iPhone 14 Series',
    description: 'Up to 10% off Voucher',
    link: '/shop-now',
  },
  {
    id: '2',
    image: iphone,
    title: 'iPhone 14 Series',
    description: 'Up to 10% off Voucher',
    link: '/shop-now',
  },
  {
    id: '3',
    image: iphone,
    title: 'iPhone 14 Series',
    description: 'Up to 10% off Voucher',
    link: '/shop-now',
  },
  {
    id: '4',
    image: iphone,
    title: 'iPhone 14 Series',
    description: 'Up to 10% off Voucher',
    link: '/shop-now',
  },
];

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
};

const HeroSection = () => {
  return (
    <div className="box1">
      <div className='link-box'>
        <div className='links'>
          <ul>
            {linkData.map((item) => (
              <li key={item.id}>
                <a href={item.link}>
                  {item.label}
                  {item.hasArrow && <img src={arrow} alt="" className="arrow-img" id="arrow2" />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='slider-container'>
          <Slider {...settings}>
            {sliderdata.map((item) => (
              <div key={item.id} className='slider-item'>
                <img src={item.image} alt={item.title} className='slider-img' />
                <div className='slider-content'>
                  <h2><img src={apple} alt="" />{item.title}</h2>
                  <p>{item.description}</p>
                  <a href={item.link} className='slider-link'>Shop now</a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
