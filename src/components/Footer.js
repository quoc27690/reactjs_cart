import React, { Component } from "react";
import "../App.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row bg-dark text-white">
          <div className="col-md-6 col-lg-3">
            <h5>Social Media</h5>
            <div class=" social">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Delivery</h5>
            <ul>
              <li>
                <a>Store Delivery</a>
              </li>
              <li>
                <a>Online Delivery</a>
              </li>
              <li>
                <a>Delivery Terms &amp; Conditions</a>
              </li>
              <li>
                <a>Tracking</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Need help?</h5>
            <ul>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>Return Policy</a>
              </li>
              <li>
                <a>Product Registration</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Instagram Photos</h5>
            <div>
              <img
                src="http://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                alt=""
                style={{ height: 100 }}
              />
              <img
                src="http://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                alt=""
                style={{ height: 100 }}
              />
              <img
                src="http://mdbootstrap.com/img/Photos/Avatars/img%20(11).jpg"
                alt=""
                style={{ height: 100 }}
              />
              <img
                src="http://mdbootstrap.com/img/Photos/Avatars/img%20(12).jpg"
                alt=""
                style={{ height: 100 }}
              />
              <img
                src="http://mdbootstrap.com/img/Photos/Avatars/img%20(13).jpg"
                alt=""
                style={{ height: 100 }}
              />
              <img
                src="http://mdbootstrap.com/img/Photos/Avatars/img%20(14).jpg"
                alt=""
                style={{ height: 100 }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
