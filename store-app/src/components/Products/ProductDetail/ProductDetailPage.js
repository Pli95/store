import React from "react";
import {Card, CardGroup, Button} from "react-bootstrap";
import Rating from "react-rating";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as faStarFull} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons'

export class ProductDetailPage extends React.Component{

  render() {
    return (
      <div className="p-5">
        <CardGroup>
        <img src="https://cdn.myanimelist.net/images/characters/9/250903.jpg" width="30%" alt="title"/>
        <Card>
          <Card.Header>
          <h1>Title</h1>
          <Rating
            initialRating={2.5}
            emptySymbol={<FontAwesomeIcon icon={faStarEmpty}/>}
            fullSymbol={<FontAwesomeIcon icon={faStarFull} style={{ color: '#007bff'}}/>}
            readonly/>
          </Card.Header>
          <Card.Body>
          <h3>$199.99</h3>
          <p>Description of the product will be entered here. Blah blah blah</p>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary" width="20px">Add to Cart</Button>
          </Card.Footer>
        </Card>
        </CardGroup>
      </div>
    )
  }
}
