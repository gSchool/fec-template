import React, { Component } from "react";
import Cart from "./Cart.jsx";
import ImageGallery from "./ImageGallery.jsx";
import Login from "./Login.jsx";
import Products from "./Products.jsx";

export default class App extends Component {
  render() {
    return (
      <div>
        <Cart />
        <ImageGallery />
        <Login />
        <Products />
      </div>
    );
  }
}
