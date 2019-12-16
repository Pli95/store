import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import {ProductsPage} from "./ProductsPage";
import {CartPage} from "./CartPage";

export class Routes extends React.Component{
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ProductsPage}/>
        <Route path='/productspage' component={ProductsPage}/>
        <Route path='/cartpage' component={CartPage}/>
        <Route render={() => (<div>404 NOT FOUND</div>)}/>
      </Switch>
    )
  }
}
