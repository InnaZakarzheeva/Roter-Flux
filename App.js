/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Router from './src/Router';
import reducer from './src/reducer/index';
import {Provider} from 'react-redux';

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
