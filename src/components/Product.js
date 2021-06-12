import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./../context";
import { ProductWrapper } from "./styles";

export default class Product extends Component {
  render() {
    const { id, price, title, img, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 col-md-6 col-lg-3 mx-auto my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => console.log("clicked!")}
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              onClick={() => console.log("added to cart!")}
              disabled={inCart}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus"></i>
              )}
            </button>
          </div>

          <div className="card-footer d-flex justify-content-between">
            <p className="mb-0 align-self-center">{title}</p>
            <h5 className="text-blue fst-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
