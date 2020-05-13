import React, { Component } from 'react';
import './App.css';

import reducer from './reducers/user.reducers';
import Login from './components/LoginPage/Login';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';


export const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

export default App;
