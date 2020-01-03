import React from "react";
import {ProductDetailList} from "./ProductDetailList";
import store from "../../../redux/configureStore";

export class ProductDetailPage extends React.Component{

  renderProducts = () => {
    // console.log(store.getState().cart)
    const product = store.getState().products.filter(p => p.id === Number(this.props.match.params.productId))
    return product.map(p => {
      return (
        <ProductDetailList
          id={p.id}
          key={p.id}
          img={p.img}
          title={p.title}
          description={p.description}
          price={p.price}
          rating={p.rating}
        />

      )
    })

  };

  render() {
    return (
      <div className="p-5">
        {this.renderProducts()}
      </div>
    )
  }
}
