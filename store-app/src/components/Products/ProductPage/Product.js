import React from "react";
import {Card, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export class Product extends React.Component {
  render() {
    return (
      <LinkContainer to={`/productspage/${this.props.id}`}>
        <Nav.Link>
          <Card style={{width: '22rem', height: '15rem'}} className="my-2">
            <Card.Img variant="top" src={this.props.img} style={{height: "80%", objectFit: "contain", padding: "5px"}}/>
            <Card.Title>{this.props.title}</Card.Title>
          </Card>
        </Nav.Link>
      </LinkContainer>
    )
  }
}
