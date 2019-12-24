import React from "react";
import Button from "react-bootstrap/Button";
import {CartItem} from "./CartItem";

export class CartPage extends React.Component {
  handleDelete = () => {
    console.log("delete")
  }

  render() {
    return (
      <div className='d-flex flex-column align-items-center'>
        <CartItem
          onDeleteClick={this.handleDelete}/>
        <Button className='my-3'> Checkout </Button>
      </div>

    );
  }

}
