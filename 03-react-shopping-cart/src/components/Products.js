import { Component } from "react";
import Product from "./Product";

const styles = {
  products: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

class Products extends Component {
  render() {
    const { products, addToCart } = this.props;
    return (
      <div style={styles.products}>
        {products.map((item) => {
          return (
            <Product addToCart={addToCart} key={item.name} product={item} />
          );
        })}
      </div>
    );
  }
}

export default Products;
