import React from "react";
import { decor, layout } from "../assets/images";

const Expertise = () => {
  return (
    <div className="expertise">
      <div className="black">
        <div className="expertiseList">
          <h1>My Staging Expertise</h1>
          <ul>
            <li>Unclutter and organize your home</li>
            <li>Neatly arrange drawers and cabinets</li>
            <li>Keep pets outdoors or off the premises</li>
            <li>Play soft music</li>
          </ul>
        </div>
        <div id="image2" className="card">
          <div className="label">
            <img src={layout} alt="" />
            <h1>Intentional Layout</h1>
          </div>
        </div>
      </div>
      <div className="white">
        <div id="image1" className="card">
          <div className="label">
            <img src={decor} alt="" />
            <h1>Decor Guidance</h1>
          </div>
        </div>
        <div id="image3" className="card"></div>
      </div>
    </div>
  );
};

export default Expertise;
