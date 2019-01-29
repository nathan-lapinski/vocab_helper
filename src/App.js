import React, { Component } from 'react';
import './App.css';
import VocabListContainer from './vocab/containers/VocabListContainer'
import VocabAddForm from './vocab/vocab-add-form/VocabAddForm';
class App extends Component {
  render() {
    return (
      <div className='App App-container'>
        <header className='App-header'>
          覺
        </header>
        <aside className='App-aside'>
          <VocabAddForm></VocabAddForm>
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
