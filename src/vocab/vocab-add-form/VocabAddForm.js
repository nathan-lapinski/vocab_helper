import React from 'react'
import PropTypes from 'prop-types'
import './VocabAddForm.css'

const VocabAddForm = () => (
  <div className='vocab-add-form-view-container'>
    <input type='text' className='vocab-add-form-input vocab-form-field' placeholder='kanji'></input>
    <input type='text' className='vocab-add-form-input vocab-form-field' placeholder='kana'></input>
    <input type='text' className='vocab-add-form-input vocab-form-field' placeholder='definition'></input>
    <button className='vocab-add-form-button vocab-form-field'>付ける</button>
  </div>
)

export default VocabAddForm