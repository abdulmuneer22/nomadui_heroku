import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import { Provider } from 'react-redux'
import { createStore  , applyMiddleware} from 'redux'

import reducers from './Redux/Reducers'
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

import Nomad from './Nomad'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Nomad />
      </Provider>
    );
  }
}

export default App;
