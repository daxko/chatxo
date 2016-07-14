import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
import App from './App';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('react'));