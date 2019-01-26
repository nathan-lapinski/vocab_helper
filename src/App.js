import React, { Component } from 'react';
import './App.css';
import VocabList from './vocab/vocab-list/VocabList';

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
          },{
            word: '利益',
            answer: 'Profits'
          },{
            word: '自己紹介',
            answer: 'Self Introduction'
          },{
            word: '貿易',
            answer: 'Foreign Trade'
          }]}
        ></VocabList>
      </div>
    );
  }
}

export default App;
