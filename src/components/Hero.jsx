import React from "react";
import { hero, search } from "../assets/images";
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <img src={hero} className="heroImage" alt="" />
        <div className="heroTitle">
          <h1>Unlock Your Dream Home's Potential.</h1>
          <h2>
            Expert real estate services for buyers, sellers, and investors.
          </h2>
        </div>
        <div className="search">
          <div className="searchInput">
            <input type="text" placeholder="Search by address or area" />
            <img src={search} alt="" />
          </div>
          <button className="ctaButton">Book an Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
