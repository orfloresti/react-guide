import { Component } from "react";

const styles = {
  cartDeatils: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  product: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaa",
  },
};
class CartDetails extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div style={styles.cartDeatils}>
        <ul style={styles.ul}>
          {cart.map((el) => {
            return (
              <li key={el.name} style={styles.product}>
                <img width="50" height="32" alt={el.name} src={el.img} />
                {el.name}
                <span>{el.qty}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CartDetails;
