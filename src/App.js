'user strict';

import React, { Component } from 'react';
import Box from './components/box';
import './css/reset.css';

class App extends Component {
  render() {
    return (<Box title='My title.' text='My sub title.' />);
  }
}

export default App;
