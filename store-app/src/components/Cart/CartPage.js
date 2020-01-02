import React from "react";
import Button from "react-bootstrap/Button";
import {CartItem} from "./CartItem";

export class CartPage extends React.Component {
  state = {products: []};

  async componentDidMount() {
    const response = await fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products');
    const products = await response.json();
    // console.log(products[0])
    this.setState({
      products
    })
  }

  renderProducts = () => {
    return this.state.products.map(p => {
      return (
        <CartItem
          key={p.id}
          img={p.img}
          title={p.title}
          price={p.price}
          onDeleteClick={this.handleDelete}
        />
      )
    })

  };
  handleDelete = () => {
    console.log("delete")
  };


  render() {
    return (
      <div className='d-flex flex-column align-items-center'>
        {this.renderProducts()}
        <Button className='my-3'> Checkout </Button>
      </div>

    );
  }

}
