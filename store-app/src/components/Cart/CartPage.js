import React from "react";
import Button from "react-bootstrap/Button";
import {CartItem} from "./CartItem";
import store from "../../redux/configureStore";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export class CartPage extends React.Component {

  renderProducts = () => {
    if (store.getState().cart.length === 0) {
      return (<h3>Cart is empty.</h3>)
    } else {
      return store.getState().cart.map(p => {
        return (
          <CartItem
            key={p.id}
            id={p.id}
            img={p.img}
            title={p.title}
            price={p.price}
            qty={p.qty}
          />
        )
      })
    }

  };

  render() {
    return (
      <div className='d-flex flex-column align-items-center'>
        {this.renderProducts()}
        <OverlayTrigger
          placement="right"
          delay={{show: 150, hide: 300}}
          overlay={<Tooltip>Button doesn't work</Tooltip>}
        >
          <Button className='my-3'> Checkout </Button>
        </OverlayTrigger>
      </div>

    );
  }

}
