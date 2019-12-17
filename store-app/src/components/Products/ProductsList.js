import React from "react";
import {Product} from "./ProductPage/Product";
import CardColumns from "react-bootstrap/CardColumns";


export class ProductsList extends React.Component{
  // state = {products:[]}

  getProducts() {
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        let products = JSON.parse(this.responseText);
        console.log(products[0])
        return (
          <Product
            img={products[0].img}
            title={products[0].title}
          />
        )
        // return products.map(product => {
        //   return (
        //     <div>{product}</div>
        //   )
        // })
      }
    };
    xml.open('GET', 'https://my-json-server.typicode.com/tdmichaelis/typicode/products', true);
    xml.send()
  }

  // renderProducts = () => {
  //   console.log("hello")
  //   return this.state.products.map(product => {
  //     return (
  //       <div>{product}</div>
  //     )
  //   })
  // }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     products: products
  //   }
  // }
  render() {
    return (
      <CardColumns>
        {this.getProducts()}
      </CardColumns>
    )
  }
}