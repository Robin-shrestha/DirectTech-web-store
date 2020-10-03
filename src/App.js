import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Product from "./components/productPage/ProductDetailRoot";
import Footer from "./components/footer/Footer";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/product/:id" component={Product} />

        <Route exact path="/" component={Home} />
        <Route exact path="/DirectTech-web-store" component={Home} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
