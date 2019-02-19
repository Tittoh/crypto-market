import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Nav from './components/Navbar'
import Home from './containers/Home'

export default () => (
  <React.Fragment>
    <Nav />
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
  </React.Fragment>
  
);