import React from "react";
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav} from "react-bootstrap";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Badge} from "@material-ui/core";
import store from "../redux/configureStore";
import {LoginPage} from "./Login/LoginPage";
import Modal from "react-bootstrap/Modal";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import * as types from "../redux/actions/actionTypes";


export class Header extends React.Component {

  state = {
    show: false,
    categories: []
  };

  async componentDidMount() {
    const response = await fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/categories');
    const categories = await response.json();
    this.setState({categories: categories})
  }


  renderCart = () => {
    return store.getState().cart.length
  };

  renderLogout = () => {
    store.dispatch({type: types.REMOVE_USER, user: false})
  };

  renderLogin = () => {
    if (!store.getState().user) {
      return (<Nav.Link onClick={this.handleShow}>Login</Nav.Link>)
    } else {
      return (
        <NavDropdown id="userDropdown" title={`Welcome ${store.getState().user}`}>
          <NavDropdown.Item onClick={this.renderLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
      )
    }
  };

  renderDropdown = () => {
    return this.state.categories.map((category, idx) => {
      return (
        <LinkContainer to={`/productspage/${category}`} key={idx}>
          <NavDropdown.Item>
            {this.capitalize(category)}
          </NavDropdown.Item>
        </LinkContainer>
      )
    })
  }


  handleClose = () => this.setState({show: false});

  handleShow = () => {
    this.setState({show: true});
  };

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Nav className="mr-auto">
          <LinkContainer to="/homepage">
            <Navbar.Brand>ElecStore</Navbar.Brand>
          </LinkContainer>
          <NavDropdown id="products" title="Products">
            <LinkContainer to={`/productspage/all`}>
              <NavDropdown.Item>
                All
              </NavDropdown.Item>
            </LinkContainer>
            {this.renderDropdown()}

          </NavDropdown>

        </Nav>
        <Nav className="ml-auto">
          {this.renderLogin()}

          <Modal show={this.state.show} onHide={this.handleClose}>
            <LoginPage
              onClose={this.handleClose}
            />
          </Modal>

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
