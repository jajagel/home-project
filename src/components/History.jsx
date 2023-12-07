import React, { useState } from "react";
import "./history.css";
import { hist1, hist2, arrow } from "../assets/images";

const history = [
  {
    id: 1,
    title: "Over 33 Years of Real Estate Success",
    description:
      "We provide every one of our clients with a level of service they won't find anywhere else. We give them what they need, often before they know they need it. In real estate, almost everything can be negotiated. When you choose Hansen Partners It is experience is 100% nonnegotiable. And it's an experience like no other.",
    image: hist1,
  },
  {
    id: 2,
    title: "We Want To Create An Unforgettable Experience For You...",
    description:
      "We combine data gained from your home's Comparative Market Analysis with local market research to create a marketing plan designed to help you meet your selling goals. Your home's carefully designed plan will include a range of online, print, and other marketing tools targeted to the best-qualified pool of buyers. Successfully marketing a home in today's real estate environment requires a firm with experience and flexibility. Hansen Partners provides both.",
    image: hist2,
  },
];
const History = () => {
  const [index, setIndex] = useState(0);
  let page = history[index];
  function nextPage() {
    if (index < history.length - 1) setIndex(index + 1);
    else setIndex(index - 1);
  }
  return (
    <div className="history">
      <img src={page.image} alt="" />
      <div className="right">
        <div className="details">
          <h1>{page.title}</h1>
          <p>{page.description}</p>
        </div>
        <div className="carousel">
          <div className="indicators">
            {history.map((item) => (
              <div
                key={item.id}
                className={`bar ${page.id === item.id ? "active" : ""}`}
                id={`bar-${item.id}`}
              ></div>
            ))}
          </div>
          <button onClick={nextPage}>
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;
