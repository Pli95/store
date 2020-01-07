import React from "react";
import Button from "react-bootstrap/Button";
import {LinkContainer} from 'react-router-bootstrap'

export class HomePage extends React.Component {
  render() {
    return (
      <div className='m-5'>
        <h1>Home</h1>
        <p>Welcome to ElecStore! Start shopping now!</p>
        <LinkContainer to='/productspage/all'>
          <Button>Shop Now</Button>
        </LinkContainer>
      </div>

    )
  }

}
