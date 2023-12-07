import React from "react";
import "./exposure.css";

const Exposure = () => {
  return (
    <div className="exposure">
      <h1>We Market Your Home to The World</h1>
      <div>
        <h3 className="mb-2">Our Online Marketing Strategy</h3>
        <p className="mb-8">
          ​​​​​​​The Bay Area remains one of the world's most sought-after
          regions to live in, and when looking to sell, it is vital that your
          home be marketed online to audiences locally, nationally, and
          internationally.
        </p>
      </div>
      <div className="exposureList">
        <div className="card">
          <h2>Local Exposure</h2>
          <p>
            Through our partnership with Nextdoor, the private online social
            network now used in over 80% of U.S. neighborhoods and virtually all
            Bay Area neighborhoods, we make sure your home receives targeted
            local exposure. When you list your home with Hansen Partners it will
            automatically appear on Nextdoor in your neighborhood
          </p>
        </div>
        <div className="card">
          <h2>National Exposure</h2>
          <p>
            We secure strategic positioning and enhancement on Realtor.com,
            Trulia, and Zillow, driving more consumers to your home and
            increasing exposure. We will receive every inquiry about your
            property directly.
          </p>
        </div>
        <div className="card">
          <h2>International Exposure</h2>
          <p>
            To expose your luxury listing to millions of potential homebuyers
            worldwide, we promote on prominent international real estate
            portals, including: Wall Street Journal, LuxuryPortfolio.com,
            LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com, China.apr.com,
            Caimeiju, Juwai, Country Life UK
          </p>
        </div>
      </div>
    </div>
  );
};

export default Exposure;
