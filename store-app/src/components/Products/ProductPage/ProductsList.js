import React from "react";
import {Product} from "./Product";
import store from "../../../redux/configureStore";

export class ProductsList extends React.Component {

  renderProducts = () => {
    return store.getState().products.map(p => {
      return (
        <Product
          id={p.id}
          key={p.id}
          img={p.img}
          title={p.title}
        />
      )
    })

  };

  render() {
    return (
      <div className="d-flex flex-wrap justify-content-around">
        {this.renderProducts()}
      </div>
    )
  }
}

