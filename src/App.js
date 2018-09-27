import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation.js';
import Hero from './Hero.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

class Home extends Component {
  render() {
    return(
      <div>
        <Hero heroText='BirdieHaus Projects'></Hero>
        <Grid>
          <Row>
            <Col xs={12} md={9}>
              <h2>The place that makes the good stuff</h2>
              <h4>Hey Zach!  Look at the Kin template on squarespace, using Julius Sans One for headers and Open Sans for body text.</h2>
              <h4>Use lots of white, open space.  Light greys and blacks for type</h4>

              <p>THis is some home page text.  THeres tons ofcontent here.  Lots of words.  THis is some home page text.  THeres tons ofcontent here.  Lots of words.THis is some home page text.  THeres tons ofcontent here.  Lots of words.THis is some home page text.  THeres tons ofcontent here.  Lots of words.THis is some home page text.  THeres tons ofcontent here.  Lots of words.THis is some home page text.  THeres tons ofcontent here.  Lots of words.THis is some home page text.  THeres tons ofcontent here.  Lots of words.THis is some home page text.  THeres tons ofcontent here.  Lots of words.THis is some home page text.  THeres tons ofcontent here.  Lots of words.THis is some home page text.  THeres tons ofcontent here.  Lots of words.THis is some home page text.  THeres tons ofcontent here.  Lots of words.THis is some home page text.  THeres tons ofcontent here.  Lots of words.</p>
            </Col>
            <Col xs={12} md={3}>
              <p>This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  This is the sidebar of the homepage.  </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

class ARoute extends Component {
  render() {
    return(
      <Grid>
        <Row>
          <Col xs={12} md={9}>
            <h2>The place that makes the good stuff</h2>
            <p>TThis is the text of a route</p>
          </Col>
          <Col xs={12} md={3}>
            <p>This text is on the side of the route.</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
         <Navigation handleSelect={this.handleSelect}></Navigation>
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
