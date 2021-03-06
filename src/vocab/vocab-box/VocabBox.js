import React from 'react'
import PropTypes from 'prop-types'
import './VocabBox.css'

const VocabBox = ({id, word, answer, reading, onRemove}) => (
  <div className="vocab-box">
    <div 
      className="vocab-box-remove"
      onClick={() => {
        onRemove(id)
      }
    }
    >X</div>
    <h3 className="vocab-box-word">{word}</h3>
    <h5 className="vocab-box-reading">{reading}</h5>
    <h4 className="vocab-box-answer">{answer}</h4>
  </div>
)

VocabBox.propTypes = {
  word: PropTypes.string.isRequired,
  reading: PropTypes.string,
  answer: PropTypes.string.isRequired
}

export default VocabBox