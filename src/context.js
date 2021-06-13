import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext(); // a context consists of a provider & a consumer

// 1. Provider
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
  };
  componentDidMount() {
    this.setProducts();
  }
  addToCart = () => {
    console.log("Hello from add to cart");
  };
  handleDetail = () => {
    console.log("handle detail");
  };

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          handleDetail: this.handleDetail,
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
