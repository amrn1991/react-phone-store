import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext(); // a context consists of a provider & a consumer

// 1. Provider
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
  };
  componentDidMount() {
    this.setProducts();
  }
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState({
      products: tempProducts,
      cart: [...this.state.cart, product],
    });
  };
  getItem = (id) => {
    return this.state.products.find((item) => item.id === id);
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState({
      detailProduct: product,
    });
  };

  openModal = (id) => {
    const item = this.getItem(id);
    this.setState({
      modalOpen: true,
      modalProduct: item,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  };

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState({
      products: tempProducts,
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          handleDetail: this.handleDetail,
          openModal: this.openModal,
          closeModal: this.closeModal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

// 2. Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
