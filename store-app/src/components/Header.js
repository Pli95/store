import React from "react";
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav} from "react-bootstrap";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Nav className="mr-auto">
          <LinkContainer to="/productspage">
            <Nav.Link>Products</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav className="ml-auto">
          <LinkContainer to="/cartpage">
            <Nav.Link>
              <FontAwesomeIcon icon={faShoppingCart}/>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    )
  }

}
