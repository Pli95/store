import React from "react";
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav} from "react-bootstrap";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Badge} from "@material-ui/core";
import store from "../redux/configureStore";


export class Header extends React.Component {

  renderCart = () => {
    return store.getState().cart.length
  }

  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Nav className="mr-auto">
          <LinkContainer to="/homepage">
            <Navbar.Brand>ElecStore</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/productspage">
            <Nav.Link>Products</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav className="ml-auto">
          <LinkContainer to="/cartpage">
            <Nav.Link>
              <Badge badgeContent={this.renderCart()} color={"primary"}>
                <FontAwesomeIcon icon={faShoppingCart}/>
              </Badge>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    )
  }

}
