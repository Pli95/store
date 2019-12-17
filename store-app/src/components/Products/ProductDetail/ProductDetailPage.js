import React from "react";
import {Card, CardGroup} from "react-bootstrap";


export class ProductDetailPage extends React.Component{
  render() {
    return (
      <div className="p-5">
        <CardGroup>
        <img src="https://cdn.myanimelist.net/images/characters/9/250903.jpg" width="30%" alt="title"/>
        <Card>
          <h1>Title</h1>

          <h3>$199.99</h3>
          <p>Description of the product will be entered here. Blah blah blah</p>
        </Card>
        </CardGroup>
      </div>
    )
  }
}
