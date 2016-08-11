import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import configureStore from './store/configure';
import ChatApp from './components/ChatApp';
import Login from './components/Login';

const store = configureStore({ username: null, messages: [] });

const hasUsername = (nextState, replace) => {
  let state = store.getState();
  if(!state.username) {
    replace('/Login');
  }
};

render((
  <Provider store={store}>
    <Router history={hashHistory} state={store.getState()}>
      <Route path="/login" component={Login} />
      <Route path="/" component={ChatApp} onEnter={hasUsername} />
    </Router>
  </Provider>
), document.getElementById('react'));