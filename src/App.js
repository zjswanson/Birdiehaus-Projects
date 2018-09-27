import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
      <div>
      <h2>This is home content</h2>
      </div>
    );
  }
}

class ARoute extends Component {
  render() {
    return(
      <div>
      <h2>This is route content</h2>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Switch>
            <Route path='/aroute' component={ARoute} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
