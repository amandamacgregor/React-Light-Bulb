import React, { Component } from 'react';
import './App.css'
import Light from './OffOn.js'
import User from './LightBulb'

class App extends Component {
  render() {
    return (
        <div>
          <User />
          <Light />
          <Light />
          <Light />
        </div>

    );
  }
}

export default App;
