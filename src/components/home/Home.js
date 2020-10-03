import React from "react";
import Carousel from "./carousel/HomeCarousel";
import Featured from "./dashboard/Featured";
import Products from "./dashboard/Products";

const Home = () => {
  return (
    <>
      <Carousel />
      <Featured />
      <Products />
    </>
  );
};

export default Home;
