import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import MarketPlan from "./components/MarketPlan";
import Expertise from "./components/Expertise";
import Process from "./components/Process";
import History from "./components/History";
import Tablet from "./components/Tablet";
import Exposure from "./components/Exposure";
import Partners from "./components/Partners";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="main">
        <Hero />
        <MarketPlan />
        <Expertise />
        <Process />
        <History />
        <Tablet />
        <Exposure />
        <Partners />
        <Cta />
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
