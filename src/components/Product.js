import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./../context";
import { ProductWrapper } from "./styles";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, price, title, img, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 col-md-6 col-lg-3 mx-auto my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                  disabled={inCart}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0">in cart</p>
                  ) : (
                    <div>
                      <i className="fas fa-cart-plus"></i>
                    </div>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>

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

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
