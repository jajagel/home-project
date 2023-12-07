import { React, useState, useEffect } from "react";
import { logo, burger, closeIcon } from "../assets/images";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the user has scrolled down, you can adjust the threshold as needed
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <img src={logo} className={`logo`} alt="" />
        <ul className={`navLinks ${isOpen ? "active" : "inactive"}`}>
          <li>
            <a href="#">Meet the Team</a>
          </li>
          <li>
            <a href="#">Search for Homes</a>
          </li>
          <li>
            <a href="#">Our Communities</a>
          </li>
          <li>
            <a href="#">Home Valuation</a>
          </li>
          <li>
            <a href="" className="activeLink">
              Services
            </a>
          </li>
          <li>
            <a href="#">Homes Across America</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <button
              className={`secondaryBtn contactNavBtn ${
                isOpen ? "active" : "inactive"
              }`}
            >
              Contact Us
            </button>
          </li>
        </ul>

        <button
          className={`hamburgerIcon ${isOpen ? "active" : "inactive"}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img
            src={isOpen ? closeIcon : burger}
            className={`${isOpen ? "closeIcon" : "burger"}`}
            alt=""
          />
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
