import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div className="card col-lg-4 col-md-6" style={{ width: "18rem" }}>
        <img
          src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Iphone 6 Plus</h5>
          <div style={{ color: "orange" }}>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p className="card-text">Sản phẩm do apply sản xuất</p>
          <div className="card-footer">
            <span>15$</span>
            <span>
              <i className="fas fa-cart-arrow-down text-primary"></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
