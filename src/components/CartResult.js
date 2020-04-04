import React, { Component } from "react";

export default class CartResult extends Component {
  render() {
    return (
      <tr>
        <td colspan="3"></td>
        <td className="align-middle">
          <h4>Tổng</h4>
        </td>
        <td className="align-middle">
          <h4>15$</h4>
        </td>
        <td className="align-middle">
          <button type="button" class="btn btn-primary">
            Complete Purchase
          </button>
        </td>
      </tr>
    );
  }
}
