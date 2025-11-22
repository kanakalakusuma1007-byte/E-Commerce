import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      {/* Left Section */}
      <div className="hero-left">
        <h2 className="hero-left-h2">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p className="hero-left-p">new</p>
            <img src={hand_icon} alt="hand icon" />
          </div>
          <p className="hero-left-p">collections</p>
          <p className="hero-left-p">for everyone</p>
        </div>

        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      </div>

      {/* Right Section */}
      <div className="hero-right">
        <img src={hero_image} alt="hero banner" />
      </div>
    </div>
  );
};

export default Hero;
