import React, { Component } from 'react';
import './App.css';
import VocabBox from './vocab-box/VocabBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>覺</h1>
        </header>
        <VocabBox word="配送便" answer="Delivery Service"/>
      </div>
    );
  }
}

export default App;
