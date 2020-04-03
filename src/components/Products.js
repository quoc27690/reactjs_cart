import React, { Component } from "react";

import Product from "./Product";

export default class Products extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Danh Sách Sản Phẩm</h2>
        <hr className="my-4" />
        <div className="row text-center">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <hr className="my-4" />
      </div>
    );
  }
}
