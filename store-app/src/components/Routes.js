import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import {CartPage} from "./Cart/CartPage";
import {ProductsPage} from "./Products/ProductPage/ProductsPage";
import {ProductDetailPage} from "./Products/ProductDetail/ProductDetailPage";


export class Routes extends React.Component{
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ProductsPage}/>
        <Route exact path='/productspage/:1' component={ProductDetailPage}/>
        <Route exact path='/productspage' component={ProductsPage}/>
        <Route path='/cartpage' component={CartPage}/>
        <Route render={() => (<div>404 NOT FOUND</div>)}/>
      </Switch>
    )
  }
}
