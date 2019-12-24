import React from "react";
import {Header} from "../../Header";
import {ProductDetailList} from "./ProductDetailList";

export class ProductDetailPage extends React.Component{

  state = {products: []};

  async componentDidMount() {
    const response = await fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products');
    const products = await response.json();
    console.log(products[0].rating)
    this.setState({
      products
    })
  }

  renderProducts = () => {
    return this.state.products.map(p => {
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
