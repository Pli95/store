import React from "react";
import {Header} from "../../Header";
import {ProductDetailList} from "./ProductDetailList";
import store from "../../../redux/configureStore";

export class ProductDetailPage extends React.Component{

  renderProducts = () => {
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

  handleAddCart = () => {
    console.log("click")
    return (
      <Header
        handleAddCart={this.handleAddCart}
      />
    )
  }

  render() {
    return (
      <div className="p-5">
        {this.renderProducts()}
      </div>
    )
  }
}
