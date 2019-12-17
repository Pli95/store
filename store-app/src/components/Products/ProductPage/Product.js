import React from "react";
import {Card} from "react-bootstrap";

export class Product extends React.Component{
  render() {
    return (
      <Card style={{ width: '10rem',  }}>
        <Card.Img variant="top" src={this.props.img} style={{ height: '50%'}}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}
