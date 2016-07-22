import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import configureStore from './store/configure';
import ChatApp from './components/ChatApp';

const store = configureStore({});

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={ChatApp} />
    </Router>
  </Provider>
), document.getElementById('react'));