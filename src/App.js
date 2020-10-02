import React from "react";
import HomeCarousel from "./components/carousel/HomeCarousel";
import Header from "./components/header/Header";
import Featured from "./components/dashboard/Featured";
import Products from "./components/dashboard/Products";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <HomeCarousel />
      <Featured />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
