import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Nomad from './Nomad'

class App extends Component {
  render() {
    return (
      <Nomad />
    );
  }
}

export default App;
