import React from 'react'
import PropTypes from 'prop-types'
import './VocabList.css'
import VocabBox from '../vocab-box/VocabBox'

const VocabList = ({vocabWords}) => (
    <div className="vocab-list">
      {vocabWords.map(v => (
          <VocabBox
            word={v.word}
            answer={v.answer}
          ></VocabBox>
          ))}
    </div>
)

// TODO: Use shape to make this better
VocabList.propTypes = {
  vocabWords: PropTypes.array.isRequired
}

export default VocabList