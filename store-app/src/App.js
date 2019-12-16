import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";

import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Routes} from "./components/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes/>
      </Router>
      <Footer/>


    </div>
  );
}

export default App;
