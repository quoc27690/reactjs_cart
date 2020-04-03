import React from "react";
import "./App.css";

import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Message from "./components/Message";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <Products />
        <Message />
        <Cart />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
