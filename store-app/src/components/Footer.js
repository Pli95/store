import React from "react";
import { Navbar} from "react-bootstrap";

export class Footer extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark" style={{ position:"fixed", bottom:0, left:0, width:"100%" }}>
        <Navbar.Text>
          Penelope Li 2020
        </Navbar.Text>
      </Navbar>
    )

  }

}
