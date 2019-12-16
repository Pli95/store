import React from "react";
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav} from "react-bootstrap";
import NavItem from "react-bootstrap/NavItem";

export class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Nav className="mr-auto">
          <LinkContainer to="/productspage">
            <Nav.Link>Products</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cartpage">
            <Nav.Link>Cart</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    )
  }

}
