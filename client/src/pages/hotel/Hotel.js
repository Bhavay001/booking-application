import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
const Hotel = () => {
  // to move slider and open image in full screen
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  //  to move left and right

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 1 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/113575125.jpg?k=77d486b68dd8b96d35c2818fc8755aaa9bd5666718cec89de67fc32ac814e53d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/56663937.jpg?k=a03b238b46875e448743a4b9be40ae599af1a2058a3af7ced9be35da370962cd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/56663935.jpg?k=7811adeb67e2699034eccdad9d06d596eea51664d6d35e4787834cbb7bed08e3&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/56663946.jpg?k=2d50dfd06f10a995fd21a1c09405de9879e88654b2c8bc4eddf93aaaa58fbdc5&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/56663942.jpg?k=28b1b7afb04d0479fa982d36bb1a2c2dfa8d97108175dc078f42105c63d859e6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/57611414.jpg?k=b6fcf510e112ed9200001a3c33162d95605ecbfc9b70510d067734d753b7517b&o=&hp=1",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}

        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Taj Santacruz</h1>

          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              Off Western Express Highway, Santacruz East, Vile Parle, Mumbai
            </span>
          </div>

          <span className="hotelDistance">
            Excellent location - 1.5km form center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹ 13,000 at this property and get a free airport
            taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                  onClick={() => handleOpen(i)}
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Mumbai </h1>
              <p className="hotelDesc">
                Offering breath-taking views of the runway from the largest
                rooms in the city. Taj Santacruz is located in Santa Cruz at a
                2-minute walk from the Chhatrapati Shivaji Domestic Airport and
                2.5 mi from International terminal. The property is located 5 mi
                from the Andheri commercial hub, 5.6 mi from Bombay Exhibition
                Center (Goregaon) and 3.1 mi from the financial hub of Bandra
                Kurla complex. Powai Central Business District is 6.8 mi while
                Worli Business District is 7.5 mi away.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 3-night</h1>
              <span>
                Located in the real heart of Mumbai, this property has an
                excellent location score of 9.1 !
              </span>
              <h2>
                <b>₹ 39,000</b>(3 nights)
              </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
