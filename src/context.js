import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext(); // a context consists of a provider & a consumer

// 1. Provider
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: [],
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
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
        };
      },
      () => {
        console.log(this.state);
      }
    );
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
