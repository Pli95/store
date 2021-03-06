import React from "react";
import {Button, Card, CardGroup, Alert} from "react-bootstrap";
import Rating from "react-rating";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as faStarEmpty} from "@fortawesome/free-regular-svg-icons";
import {faStar as faStarFull} from "@fortawesome/free-solid-svg-icons";
import store from "../../../redux/configureStore";
import * as types from "../../../redux/actions/actionTypes";
import './ProductDetailList.css'

export class ProductDetailList extends React.Component {
  state = {
    alert: "Added to Cart",
    display: false
  }
  onClick = () => {
    this.handleAddCart();
    this.addAlert();
  }

  handleAddCart = () => {
    const product = this.props;
    store.dispatch({type: types.ADD_CART, product: product})
  }

  addAlert = () => {
    this.setState({display: true})
    setTimeout(() => {
      this.setState({display: false})
    }, 3000)
  }

  render() {
    return (
      <div>
        <CardGroup>
          <img src={this.props.img} width="30%" alt={this.props.title}
               style={{maxHeight: '700px', objectFit: 'contain'}} className="pr-2"/>
          <Card>
            <Card.Header>
              <h1>{this.props.title}</h1>
              <Rating
                initialRating={this.props.rating}
                emptySymbol={<FontAwesomeIcon icon={faStarEmpty}/>}
                fullSymbol={<FontAwesomeIcon icon={faStarFull} style={{color: '#007bff'}}/>}
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
                onClick={this.onClick}
              >Add to Cart</Button>
            </Card.Footer>
          </Card>
        </CardGroup>
        <Alert variant="info" className={this.state.display ? 'display' : 'hidden'}>{this.state.alert}</Alert>
      </div>
    )
  }

}
