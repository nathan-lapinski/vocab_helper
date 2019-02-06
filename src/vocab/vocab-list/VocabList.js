import React from 'react'
import PropTypes from 'prop-types'
import './VocabList.css'
import VocabBox from '../vocab-box/VocabBox'

const VocabList = ({vocabWords, onRemove}) => (
    <div className="vocab-list">
      {vocabWords.map(v => (
          <VocabBox
            id={v.id}
            word={v.word}
            reading={v.reading}
            answer={v.answer}
            onRemove={onRemove}
          ></VocabBox>
          ))}
    </div>
)

// TODO: Use shape to make this better
VocabList.propTypes = {
  vocabWords: PropTypes.array.isRequired
}

export default VocabList