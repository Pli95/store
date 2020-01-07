import React from "react";
import {Product} from "./Product";
import store from "../../../redux/configureStore";

export class ProductsPage extends React.Component {

  renderProducts = () => {
    if (this.props.match.params.category === "all") {
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
    } else {
      const product = store.getState().products.filter(p => p.category === this.props.match.params.category)
      return product.map(p => {
        return (
          <Product
            id={p.id}
            key={p.id}
            img={p.img}
            title={p.title}
          />
        )
      })
    }

  };

  render() {
    return (
      <div className="d-flex flex-wrap justify-content-around mb-5">
        {this.renderProducts()}
      </div>
    )
  }
}

