import React from "react";
import "./tablet.css";
import { tablet, check } from "../assets/images";

const Tablet = () => {
  return (
    <div className="tablet">
      <h1>The Hansen Partners Communications Tablet</h1>
      <p>
        We have created this as a wonderful tool so that we can communicate with
        you daily, provide you with updates on what is happening with your home.
        We are available at the with a click of your tablet.
      </p>
      <img src={tablet} alt="" />
      <div className="benefits">
        <div className="item">
          <img src={check} alt="" />
          <p>
            Stay up to date on all marketing activities, review materials,
            photos, etc. in real time.
          </p>
        </div>{" "}
        <div className="item">
          <img src={check} alt="" />
          <p>
            Review all documents and sign in the comfort of your home or
            anywhere.
          </p>
        </div>
        <div className="item">
          <img src={check} alt="" />
          <p>
            You have your own email assigned just for you and your common space
            to quickly write a note, or quickly send a video message to us for
            fast communication using our Bomb bomb video messaging system.
          </p>
        </div>
        <div className="item">
          <img src={check} alt="" />
          <p>
            Meet with us face to face on our Gotomeeting.com platform to go over
            and discuss the events of the week.
          </p>
        </div>
      </div>
      <p className="alignLeft">
        We believe that transparency and guiding you and your family through the
        process is key to having the best experience. During these uncertain
        times. It is a good feeling to know you have some one with a proven
        track record you can count on. We will be here to handle your needs
        during the Real Estate process. We think of it before a need even
        arises. Because, that is just what we do. Who you work with does matter!
      </p>
    </div>
  );
};

export default Tablet;
