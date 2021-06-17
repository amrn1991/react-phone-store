import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer, ModalContainer } from "./styles";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (modalOpen) {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 col-md-6 col-lg-4 mx-auto text-center text-capitalize p-5"
                    >
                      <h5>item added to cart</h5>
                      <img src={img} alt="product" className="img-fluid" />
                      <h5 className="pt-2">{title}</h5>
                      <h5 className="text-muted">price : ${price}</h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          store
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          } else {
            return null;
          }
        }}
      </ProductConsumer>
    );
  }
}
