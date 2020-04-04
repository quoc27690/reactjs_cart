import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    return (
      <tr>
        <th scope="row">
          <img
            src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
            alt=""
            style={{ height: 100 }}
          />
        </th>
        <td className="align-middle">
          <h5>Iphone 6 Plus</h5>
        </td>
        <td className="align-middle">15$</td>
        <td className="center-on-small-only align-middle">
          <span>1 </span>
          <button type="button" class="btn btn-primary">
            +
          </button>
          <button type="button" class="btn btn-primary">
            -
          </button>
        </td>
        <td className="align-middle">15$</td>
        <td className="align-middle">
          <button type="button" class="btn btn-primary">
            x
          </button>
        </td>
      </tr>
    );
  }
}
