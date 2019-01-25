import React from 'react'
import PropTypes from 'prop-types'
import './VocabBox.css'

const VocabBox = ({word, answer}) => (
  <div className="vocab-box">
    <h3 className="vocab-box-word">{word}</h3>
    <h3 className="vocab-box-answer">{answer}</h3>
  </div>
)

VocabBox.propTypes = {
  word: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
}

export default VocabBox