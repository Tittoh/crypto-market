import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import {
  Provider
} from 'react-redux';
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Home from './containers/Home'
import configStore from './store'

const store = configStore();

export default () => (
  <Provider store={store}>
    <Nav />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
    <Footer />
  </Provider>
  
);