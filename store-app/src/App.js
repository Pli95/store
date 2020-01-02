import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/configureStore";
import {Provider} from 'react-redux'

import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Routes} from "./components/Routes";
import * as types from "./redux/actions/actionTypes";

class App extends React.Component {
  async componentDidMount() {
    const response = await fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products');
    const products = await response.json();
    store.subscribe(() => this.forceUpdate())
    store.dispatch({type: types.SET_PRODUCTS, products: products})
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Header/>
            <Routes/>
          </Router>
          <Footer/>
        </div>
      </Provider>
    );
  }
}

export default App;
