import React from "react";
import {Product} from "./ProductPage/Product";

export class ProductsList extends React.Component {

  state = {products: []};

  async UNSAFE_componentWillMount() {
    const response = await fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products');
    const products = await response.json();
    console.log(products[0])
    this.setState({
      products
    })
  }

  renderProducts = () => {
    return this.state.products.map(p => {
      return (
        <Product
          key={p.id}
          img={p.img}
          title={p.title}
        />
      )
    })

  };

  render() {
    return (
      <div to="/productspage/productdetail" className="d-flex flex-wrap justify-content-around">
        {this.renderProducts()}
      </div>
    )
  }
}

