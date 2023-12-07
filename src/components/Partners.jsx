import React from "react";
import { luxury, partner1, partner2, partner3 } from "../assets/images";
import "./partners.css";
const Partners = () => {
  return (
    <div className="partners">
      <div className="left">
        <p>
          Through our international affiliations, we have a strong presence in
          over 50 countries. Our luxury listings are sent to prominent
          international real estate sites, reaching over 70 million potential
          buyers and investors worldwide through our relationships with:
        </p>
        <p className="bold ">
          Leading Real Estate Companies of The World® & Luxury Portfolio
          International
        </p>
        <div className="images">
          <img src={partner1} alt="" />
          <img src={partner2} alt="" />
          <img src={partner3} alt="" />
        </div>
        <p>
          We also have several well-positioned affiliate offices in China,
          providing our clients with access to buyers in Hong Kong, Shanghai,
          and Beijing.
        </p>
        <p>
          JRockcliff is a founding member of Luxury Portfolio International®,
          the luxury division of Leading Real Estate Companies of the World®.
          With more than 500 member firms around the world, Our luxury listings
          are exposed to a vast global audience and reach potential buyers and
          investors in over 50 countries.
        </p>
        <p>
          Who’s Who in Luxury Real Estate is a global collection of luxury real
          estate brokers
        </p>
      </div>
      <img className="luxury" src={luxury} alt="" />
    </div>
  );
};

export default Partners;
