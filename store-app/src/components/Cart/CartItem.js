import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import store from "../../redux/configureStore";
import * as types from "../../redux/actions/actionTypes";

export class CartItem extends React.Component {

  handleAdd = () => {
    const product = this.props
    store.dispatch({type: types.ADD_QTY, product: product })
  }

  handleLess = () => {
    const product = this.props
    store.dispatch({type: types.DELETE_QTY, product: product })
  }

  handleDelete = () => {
   const product = this.props
    store.dispatch({type: types.DELETE_PRODUCT, product: product})
  }

  render() {
    return (
      <Card style={{width: '50%', height: '270px'}} className="d-flex flex-row justify-content-between align-items-center p-2 mt-3">
        <img src={this.props.img} width="50%" alt="product" style={{ maxHeight: "100%", objectFit: "contain" }}/>
        <div>
          <h3>{this.props.title}</h3>
          <span>${this.props.price}</span>
        </div>
        <div className="d-flex">
          <ButtonGroup className="border mr-2 rounded">
            <Button onClick={this.handleLess} disabled={this.props.qty === 0}>-</Button>
            <div style={{width: '35px'}} className='align-self-center'>{this.props.qty}</div>
            <Button onClick={this.handleAdd}>+</Button>
          </ButtonGroup>
          <Button variant="danger" onClick={this.handleDelete}>Delete</Button>
        </div>


      </Card>
    );
  }

}
