import React, { Component, Fragment } from "react";
import "./Product.css";
import cart from "../../assets/shopping-cart.png";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
  state = {
    order: 4,
  };

// methode handleCounterChange menerima data, kemudian
handleCounterChange = (newValue) => {
    // ubah data
    this.setState({
        // order menjadi data yg di dapat
        order: newValue
    })
}

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <p>Toko Ku</p>
          </div>
          <div className="troley">
            <img src={cart} alt="yyy"></img>
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        {/* value onCounterChange di kirimkan ke metode handleCounterChange */}
        <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)}/>
      </Fragment>
    );
  }
}

export default Product;
