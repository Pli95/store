import React from "react";
import {Button, Card, CardGroup} from "react-bootstrap";
import Rating from "react-rating";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as faStarEmpty} from "@fortawesome/free-regular-svg-icons";
import {faStar as faStarFull} from "@fortawesome/free-solid-svg-icons";

export class ProductDetailList extends React.Component{

  render() {
    return (
      <CardGroup>
        <img src={this.props.img} width="30%" alt={this.props.title}/>
        <Card>
          <Card.Header>
            <h1>{this.props.title}</h1>
            <Rating
              initialRating={this.props.rating}
              emptySymbol={<FontAwesomeIcon icon={faStarEmpty}/>}
              fullSymbol={<FontAwesomeIcon icon={faStarFull} style={{ color: '#007bff'}}/>}
              readonly/>
          </Card.Header>
          <Card.Body>
            <h3>${this.props.price}</h3>
            <p>{this.props.description}</p>
          </Card.Body>
          <Card.Footer>
            <Button
              variant="primary"
              width="20px"
              onClick={this.handleAddCart}
            >Add to Cart</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    )
  }

}
