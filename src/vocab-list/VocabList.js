import React from 'react';
import './VocabList.css';
import VocabBox from '../vocab-box/VocabBox';

export default ({vocabWords}) => (
    <div className="vocab-list">
      {vocabWords.map(v => (
          <VocabBox
            word={v.word}
            answer={v.answer}
          ></VocabBox>
          ))}
    </div>
);