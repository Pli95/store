import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import configureStore from "./redux/configureStore";
import {Provider} from 'react-redux'

import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Routes} from "./components/Routes";

const store = configureStore();

function App() {
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

export default App;
