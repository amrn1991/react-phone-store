import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary navbar-expand-sm px-sm-5">
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ms-auto">
          <button>
            <i className="fas fa-cart-plus"></i>
          </button>
        </Link>
      </nav>
    );
  }
}
