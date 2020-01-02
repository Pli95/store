import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export class CartItem extends React.Component {
  state = {
    itemNum: 1
  }

  handleAdd = () => {
    this.setState({itemNum: this.state.itemNum + 1})
  }

  handleLess = () => {
    this.setState({itemNum: this.state.itemNum - 1})
  }

  handleDelete = () => {
    console.log(this.props)
    this.props.onDeleteClick(this.props.id)
  }

  render() {
    return (
      <Card style={{width: '50%'}} className="d-flex flex-row justify-content-between align-items-center p-2 mt-3">
        <img src={this.props.img} width="50%" alt="product"/>
        <div>
          <h3>{this.props.title}</h3>
          <span>{this.props.price}</span>
        </div>
        <div className="d-flex">
          <ButtonGroup className="border mr-2 rounded">
            <Button onClick={this.handleLess} disabled={this.state.itemNum === 0}>-</Button>
            <div style={{width: '35px'}} className='align-self-center'>{this.state.itemNum}</div>
            <Button onClick={this.handleAdd}>+</Button>
          </ButtonGroup>
          <Button variant="danger" onClick={this.handleDelete}>Delete</Button>
        </div>


      </Card>
    );
  }

}
