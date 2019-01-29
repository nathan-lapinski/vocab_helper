import React, { Component } from 'react';
import './App.css';
import VocabListContainer from './vocab/containers/VocabListContainer'
import VocabFormContainer from './vocab/containers/VocabFormContainer';
class App extends Component {
  render() {
    return (
      <div className='App App-container'>
        <header className='App-header'>
          覺
        </header>
        <aside className='App-aside'>
          <VocabFormContainer></VocabFormContainer>
        </aside>
        <main className='App-main'>
          <VocabListContainer></VocabListContainer>
        </main>
        <footer className='App-footer'></footer>
      </div>
    );
  }
}

export default App;
