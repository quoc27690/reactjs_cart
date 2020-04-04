import React, { Component } from "react";

import CartItem from "./CartItem";
import CartResult from "./CartResult";

export default class Cart extends Component {
  render() {
    return (
      <div class="container-fluid">
        <hr className="my-4" />
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Sản Phẩm</th>
              <th scope="col">Giá</th>
              <th scope="col">Số Lượng</th>
              <th scope="col">Tổng Cộng</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartResult />
          </tbody>
        </table>
      </div>
    );
  }
}
