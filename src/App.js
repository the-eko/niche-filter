import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/";
import Error from "./Components/404";


class App extends Component {
  render() {
    return (
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    );
  }
}

export default App;
