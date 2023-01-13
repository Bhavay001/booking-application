import React from "react";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87375132.webp?k=bf21dffd3a2dd3910f399d082f22b51aeda78604c773c121bdedfc018ad0c58a&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Downtown Synagogue</span>
        <span className="fpCity">Hungary, Budapest</span>
        <span className="fpPrice">Starting from ₹ 5,264</span>
        <div className="fpRating">
          <button>8.6</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites Airport</span>
        <span className="fpCity">Downtown Austin</span>
        <span className="fpPrice">Starting from ₹ 9,245</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/403985858.webp?k=a178ef7861da745609ae191158b166be93cbe0d05d3b99e0549e9dc736f9a971&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Poland, Kraków</span>
        <span className="fpPrice">Starting from ₹ 7,405</span>
        <div className="fpRating">
          <button>8.7</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">numa l Vita Apartments</span>
        <span className="fpCity">Italy, Florence</span>
        <span className="fpPrice">Starting from ₹ 11,924</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Wonderful</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
