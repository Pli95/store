import React from "react";
import {Modal, Button} from "react-bootstrap";
import store from "../../redux/configureStore";
import * as types from "../../redux/actions/actionTypes";
import Form from "react-bootstrap/Form";


export class LoginPage extends React.Component {

  state = {
    name: '',
    setValidate: false,
    validated: false
  };

  onChange = (e) => {
    this.setState({name: e.target.value})
  };


  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      store.dispatch({type: types.SET_USER, user: this.state.name})
      this.props.onClose()
    }

    this.setState({setValidate: true, validated: true})
  }


  render() {
    return (
      <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body className="px-5">

          <Form.Control
            required
            type="text"
            placeholder="Username"
            onChange={this.onChange}
            className="my-3"
          />
          <Form.Control
            required
            type="password"
            placeholder="Password"
            className="my-3"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onClose}>Cancel</Button>
          <Button variant="primary" type="submit">Log In</Button>
        </Modal.Footer>
      </Form>

    )
  }

}
