import React from "react";
import Hero from "../components/home/hero";
import CoreEssentials from "../components/home/core-essentials";
import BestSeller from "../components/home/best-sellers";
import Banner from "../components/home/banner";
import Banner2 from "../components/home/banner2";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <CoreEssentials />
      <Banner />
      <BestSeller />
      <Banner2 />
    </React.Fragment>
  );
};

export default Home;