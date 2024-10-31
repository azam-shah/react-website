import React, { useEffect, useRef, useState, useContext } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./Sale.css";
import heart from "../images/heart small.svg";
import view from "../images/Quick View.svg";
import next from "../images/icons arrow-right (2).svg";
import prev from "../images/icons_arrow-left (1).svg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCart } from "../context/Cart_Context"; // Updated import
// import { useNavigate } from "react-router-dom";
import WishlistContext from "../context/WishlistContext";

function Sale() {
  const { addToCart } = useCart(); // Updated destructuring
  const { wishlist, dispatch } = useContext(WishlistContext);
  // const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const color = "red"; // Hardcoded for now, change as needed
    const amount = 1; // Default amount of 1
    addToCart(product, color, amount); // Pass product, color, and amount
  };

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const sliderRef = useRef(null);

  const startTimer = () => {
    const countdownDate = new Date("oct 16 2024 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimerDays(days < 10 ? "0" + days : days); // Add leading zero
        setTimerHours(hours < 10 ? "0" + hours : hours); // Add leading zero
        setTimerMinutes(minutes < 10 ? "0" + minutes : minutes); // Add leading zero
        setTimerSeconds(seconds < 10 ? "0" + seconds : seconds); // Add leading zero
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(startTimer);
  }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data); 
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleViewAllClick = () => {
    setShowAll(true);
  };

  const isInWishlist = (product) => {
    return wishlist.some(item => item.id === product.id);
  };

  const handleWishlistToggle = (product) => {
    if (isInWishlist(product)) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product });
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className="sale-container">
        <div className="sale-box">
          <div className="sale-content">
            <div className="sale-logo"></div>
            <div>
              <h4>Today's</h4>
            </div>
          </div>

          <div className="timer-box">
            <div>
              <h2>Flash Sales</h2>
            </div>

            <div className="timer-content">
              <div>
                <p>Days</p>
                <span className="counter">
                  <p>
                    {timerDays} <span className="dots">:</span>
                  </p>
                </span>
              </div>

              <div>
                <p>Hours</p>
                <span className="counter">
                  <p>
                    {timerHours} <span className="dots">:</span>
                  </p>
                </span>
              </div>

              <div>
                <p>Minutes</p>
                <span className="counter">
                  <p>
                    {timerMinutes} <span className="dots">:</span>
                  </p>
                </span>
              </div>

              <div>
                <p>Seconds</p>
                <span className="counter">
                  <p>{timerSeconds}</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="arrows">
          <div className="right-arrow" onClick={handlePrevClick}>
            <img src={prev} alt="Previous" />
          </div>
          <div className="left-arrow" onClick={handleNextClick}>
            <img src={next} alt="Next" />
          </div>
        </div>
      </div>

      <div className="flash-sale">
        {!showAll ? (
          <Slider ref={sliderRef} {...settings}>
            {loading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="card1">
                    <Skeleton height={200} />
                    <Skeleton width={"60%"} />
                    <Skeleton width={"80%"} />
                  </div>
                ))
              : products.map((product) => (
                  <div key={product.id} className="cards">
                    <div className="card1">
                      <div className="heart-box">
                        <p className="pera">-{product.discountPercentage}%</p>
                        <div>
                          <img src={heart} alt="wishlist"
                          onClick={() => handleWishlistToggle(product)} 
                          className={isInWishlist(product) ? 'wishlist-icon active' : 'wishlist-icon'}
                          style={{ cursor: 'pointer' }}
                          />
                        </div>
                      </div>
                      <div className="view-img">
                        <div className="image">
                          <img src={view} alt="" />
                        </div>
                      </div>
                      <img
                        src={product.images[0]}
                        alt=""
                        className="product-img"
                      />
                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add To Cart
                      </button>
                    </div>
                    <h3>{product.title}</h3>
                    <span className="current-price">${product.price}</span>
                    <div className="ratings">{product.rating} ★★★★★</div>
                  </div>
                ))}
          </Slider>
        ) : (
          <div className="all-products">
            {loading
              ? Array.from({ length: 10 }).map((_, index) => (
                  <div key={index} className="cards">
                    <div className="card1">
                      <Skeleton height={200} />
                      <Skeleton width={"60%"} />
                      <Skeleton width={"80%"} />
                    </div>
                  </div>
                ))
              : products.map((product) => (
                  <div key={product.id} className="cards">
                    <div className="card1">
                      <div className="heart-box">
                        <p className="pera">-{product.discountPercentage}%</p>
                       <div> <img src={heart} alt="" onClick={() => handleWishlistToggle(product)} 
                          className={isInWishlist(product) ? 'wishlist-icon active' : 'wishlist-icon'}
                          style={{ cursor: 'pointer', color: 'red' }}/></div>
                      </div>
                      <div className="view-img">
                        <div className="image">
                          <img src={view} alt="" />
                        </div>
                      </div>
                      <img
                        src={product.images[0]}
                        alt=""
                        className="product-img"
                      />
                      <button
                        className="add-to-cart-btn"
                        onClick={() =>
                          handleAddToCart(product)
                        }
                      >
                        Add To Cart
                      </button>
                    </div>
                    <h3>{product.title}</h3>
                    <span className="current-price">${product.price}</span>
                    <div className="ratings">{product.rating} ★★★★★</div>
                  </div>
                ))}
          </div>
        )}

        {!showAll && (
          <button
            className="view-all-btn"
            type="button" // Changed from 'btn' to 'button'
            onClick={handleViewAllClick}
          >
            View All Products
          </button>
        )}
      </div>
    </>
  );
}

export default Sale;
