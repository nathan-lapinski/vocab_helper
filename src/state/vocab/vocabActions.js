export const VOCAB_WORDS_REQUEST = 'VOCAB_WORDS_REQUEST'
export const VOCAB_WORDS_REQUEST_SUCCESS = 'VOCAB_WORDS_REQUEST_SUCCESS'
export const VOCAB_WORDS_REQUEST_ERROR = 'VOCAB_WORDS_REQUEST_ERROR'
export const VOCAB_WORDS_CREATE = 'VOCAB_WORDS_CREATE'

export const vocabWordsRequest = () => ({ type: VOCAB_WORDS_REQUEST })
export const vocabWordsRequestSuccess = ({words}) => ({ 
  type: VOCAB_WORDS_REQUEST_SUCCESS,
  payload: {
    data: words
  }
})
export const vocabWordsRequestError = () => ({ type: VOCAB_WORDS_REQUEST_ERROR })
export const vocabWordsCreate = ({word, reading, answer}) => ({
  type: VOCAB_WORDS_CREATE,
  payload: {
    word,
    reading,
    answer
  }
})