import React from "react";
import "./footer.css";
import {
  facebook,
  linkedin,
  company1,
  company2,
  company3,
} from "../assets/images";

const Footer = () => {
  return (
    <footer>
      <div className="left">
        <div>
          <h1 className="mb-4">Julie Hansen Partnership</h1>
          <p>
            An elite group of the East Bay’s most talented and visionary real
            estate professionals believed buyers and sellers deserved more from
            their real estate company. More service. More resources. More
            integrity. More global reach. In a word, more of everything people
            should expect when they buy or sell their homes.
          </p>
        </div>
        <div className="contactInfo">
          <div>
            <h2 className="mb-4">Address</h2>
            <p>
              4733 Chabot Drive #100 Pleasanton, CA 94588 ​​Julie Hansen-Orvis |
              CA DRE# 00934447
            </p>
          </div>
          <div>
            <h2 className="mb-4">Contact Information</h2>
            <p>(925) 980-4925</p>
            <p>hansenpartners.re@gmail.com</p>
          </div>
        </div>
        <div className="socials">
          <a
            href="https://www.facebook.com/juliehansenpartership"
            target="_blank"
          >
            <img src={facebook} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/julie-hansen-orvis-10b99359/"
            target="_blank"
          >
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
      <div className="right">
        <div className="newsletter ">
          <h1>Newsletter</h1>
          <p>
            Subscribe to our Newsletter for latest news and updates. Stay tuned!
          </p>
          <div className="mail">
            <input type="text" placeholder="Email Address" />
            <button className="secondaryBtn">Subscribe</button>
          </div>
        </div>
        <div className="copyright">
          <div className="companies">
            <img src={company1} alt="" />
            <img src={company2} alt="" />
            <img src={company3} alt="" />
          </div>
          <p>Copyright 2023 | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
