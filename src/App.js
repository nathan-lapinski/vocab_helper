import React, { Component } from 'react';
import './App.css';
import VocabBox from './vocab-box/VocabBox';
import VocabList from './vocab-list/VocabList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>覺</h1>
        </header>
        <VocabList
          vocabWords={[{
            word: '配送便',
            answer: 'Delivery Service'
          },{
            word: '掲載',
            answer: 'Publication'
          }]}
        ></VocabList>
        {/* <VocabBox word="配送便" answer="Delivery Service"/> */}
      </div>
    );
  }
}

export default App;
