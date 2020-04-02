import React, { Component } from "react";
import logo1 from "../images/logo1.png";

export default class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
          <div class="mr-auto">
            <a class="navbar-brand" href="#">
              <img alt="" src={logo1} height="50" />
              Q-Phone
            </a>
          </div>

          <button
            class="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarToggler">
            <ul class="navbar-nav mr-auto ml-4">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                >
                  Account
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Register
                  </a>
                  <a class="dropdown-item" href="#">
                    LogIn
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    LogOut
                  </a>
                </div>
              </li>
            </ul>
            <form class="form-inline">
              <input class="form-control" type="search" placeholder="Search" />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
