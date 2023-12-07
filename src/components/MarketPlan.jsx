import React from "react";
import { map, mail, flag, photography } from "../assets/images";

const MarketPlan = () => {
  return (
    <div className="marketPlan">
      <h1>Comprehensive Marketing Plan</h1>
      <div className="services">
        <div className="serviceItem">
          <img src={mail} alt="" />
          <h2>Responsive</h2>
          <p>I am always available via phone, text, or email.</p>
        </div>
        <div className="serviceItem">
          <img src={flag} alt="" />
          <h2>Syndication</h2>
          <p>
            I market your property locally, nationally, and internationally.
          </p>
        </div>
        <div className="serviceItem">
          <img src={map} alt="" />
          <h2>Virtual Tour</h2>
          <p>
            Let's make your home stand out with a high quality virtual tour.
          </p>
        </div>
        <div className="serviceItem">
          <img src={photography} alt="" />
          <h2>Photography</h2>
          <p>
            Beatiful, high-end photography is a central part of our marketing
            plan for your property.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketPlan;
