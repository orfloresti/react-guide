import { Component } from "react";
import Products from "./components/Products";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    products: [
      { name: "Tomate", price: 1500, img: "./products/tomate.jpg" },
      { name: "Peas", price: 1500, img: "./products/arbejas.jpg" },
      { name: "Lettuce", price: 1500, img: "./products/lechuga.jpg" },
    ],
    cart: [],
    isCartVisible: false,
  };

  addToCart = (product) => {
    const { cart } = this.state;
    if (cart.find((item) => item.name === product.name)) {
      const newCart = cart.map((x) =>
        x.name === product.name
          ? {
              ...x,
              qty: x.qty + 1,
            }
          : x
      );

      return this.setState({
        cart: newCart,
      });
    }
    return this.setState({
      cart: this.state.cart.concat({ ...product, qty: 1 }),
    });
  };

  toogleCart = () => {
    if(!this.state.cart.length) {
      return;
    }
    this.setState({ isCartVisible: !this.state.isCartVisible });
  };

  render() {
    return (
      <div>
        <Navbar
          isCartVisible={this.state.isCartVisible}
          toogleCart={this.toogleCart}
          cart={this.state.cart}
        />
        <Layout>
          <Title />
          <Products addToCart={this.addToCart} products={this.state.products} />
        </Layout>
      </div>
    );
  }
}

export default App;
