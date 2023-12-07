import React from "react";
import { image4, image5 } from "../assets/images";
const Process = () => {
  return (
    <div>
      <div className="process">
        <img id="image4" src={image4} alt="" />
        <div className="steps">
          <h1>The Selling Process</h1>
          <div className="step">
            <div className="number">1</div>
            <p>Initial Consultation & Planning</p>
          </div>
          <div className="step">
            <div className="number">2</div>
            <p>Devise & Execute Marketing Plan</p>
          </div>
          <div className="step">
            <div className="number">3</div>
            <p>Review Offers & Reach Agreement with Buyer</p>
          </div>
          <div className="step">
            <div className="number">4</div>
            <p>Complete Transaction Process</p>
          </div>
          <div className="step">
            <div className="number">5</div>
            <p>After-sale Service</p>
          </div>
        </div>
      </div>
      <div className="process">
        <div className="steps">
          <h1>The Buying Process</h1>
          <div className="step">
            <div className="number">1</div>
            <p>Initial Consultation & Planning</p>
          </div>
          <div className="step">
            <div className="number">2</div>
            <p>Search for a Home & Get Pre-Approved</p>
          </div>
          <div className="step">
            <div className="number">3</div>
            <p>Submit an Offer</p>
          </div>
          <div className="step">
            <div className="number">4</div>
            <p>Complete Settlement Process</p>
          </div>
        </div>
        <img id="image5" src={image5} alt="" />
      </div>
    </div>
  );
};

export default Process;
