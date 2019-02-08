import React from 'react'
import './VocabAddForm.css'

const VocabAddForm = ({onSubmit}) => {
  let word, reading, answer;
  return (
  <div className='vocab-add-form-view-container'>
    <input 
      type='text' 
      className='vocab-add-form-input vocab-form-field' 
      placeholder='kanji'
      ref={(node) => word = node}></input>
    <input 
      type='text' 
      className='vocab-add-form-input vocab-form-field' 
      placeholder='kana'
      ref={(node) => reading = node}></input>
    <input 
      type='text' 
      className='vocab-add-form-input vocab-form-field' 
      placeholder='definition'
      ref={(node) => answer = node}></input>
    <button 
      className='vocab-add-form-button vocab-form-field'
      onClick={() => {
          console.log('clicked with: ', onSubmit)
          onSubmit({
            word: word.value,
            reading: reading.value,
            answer: answer.value})
          // clear the form
          word.value = ''
          reading.value = ''
          answer.value = ''
        }
      }
    >付ける</button>
  </div>)
}

export default VocabAddForm