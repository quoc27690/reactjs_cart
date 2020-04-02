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
      {/* <main id="mainContainer">
        <div className="container">
          <Products />
          <Message />
          <Cart />
        </div>
      </main> */}
      <Footer />
    </div>
  );
}

export default App;
