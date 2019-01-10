import React, { Component } from 'react';
import HcardBuilder from './components/hcard-builder/hcard-builder';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HcardBuilder />
      </div>
    );
  }
}

export default App;
