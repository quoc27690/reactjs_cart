import React, { Component } from "react";
import "../App.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <h5>Social Media</h5>
              <div className="">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-dribbble left"></i>
                <i className="fab fa-pinterest"></i>
                <i className="fab fa-google-plus"></i>
              </div>
            </div>
            <div className="col-lg-2">
              <h5 className="title">Delivery</h5>
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
            <div className="col-lg-2">
              <h5 className="title">Need help?</h5>
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
            <div className="col-lg-4">
              <h5 className="title">Instagram Photos</h5>
              <ul className="instagram-photos">
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img
                      className="img-fluid"
                      src="http://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                      alt=""
                    />
                    <a>
                      <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img
                      className="img-fluid"
                      src="http://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                      alt=""
                    />
                    <a>
                      <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img
                      className="img-fluid"
                      src="http://mdbootstrap.com/img/Photos/Avatars/img%20(19).jpg"
                      alt=""
                    />
                    <a>
                      <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img
                      className="img-fluid"
                      src="http://mdbootstrap.com/img/Photos/Avatars/img%20(16).jpg"
                      alt=""
                    />
                    <a>
                      <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img
                      className="img-fluid"
                      src="http://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg"
                      alt=""
                    />
                    <a>
                      <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img
                      className="img-fluid"
                      src="http://mdbootstrap.com/img/Photos/Avatars/img%20(18).jpg"
                      alt=""
                    />
                    <a>
                      <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img
                      className="img-fluid"
                      src="http://mdbootstrap.com/img/Photos/Avatars/img%20(15).jpg"
                      alt=""
                    />
                    <a>
                      <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img
                      className="img-fluid"
                      src="http://mdbootstrap.com/img/Photos/Avatars/img%20(17).jpg"
                      alt=""
                    />
                    <a>
                      <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container-fluid">
            © 2016 Copyright:
            <a href="http://www.MDBootstrap.com"> MDBootstrap.com </a>
          </div>
        </div>
      </div>
    );
  }
}
