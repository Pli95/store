import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import {CartPage} from "./Cart/CartPage";
import {ProductsPage} from "./Products/ProductPage/ProductsPage";
import {ProductDetailPage} from "./Products/ProductDetail/ProductDetailPage";
import {HomePage} from "./Home/HomePage";
import {LoginPage} from "./Login/LoginPage";


export class Routes extends React.Component{
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/productspage/:productId' component={ProductDetailPage}/>
        <Route exact path='/productspage' component={ProductsPage}/>
        <Route path='/cartpage' component={CartPage}/>
        <Route path='/homepage' component={HomePage}/>
        <Route path='/loginpage' component={LoginPage}/>
        <Route render={() => (<div>404 NOT FOUND</div>)}/>
      </Switch>
    )
  }
}
