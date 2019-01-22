import React from 'react';
import './VocabBox.css';
export default ({word, answer}) => (
  <div className="vocab-box">
    <h3 className="vocab-box-word">{word}</h3>
    <h3 className="vocab-box-answer">{answer}</h3>
  </div>
);