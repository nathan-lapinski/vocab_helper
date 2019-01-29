import { VOCAB_WORDS_REQUEST_SUCCESS, VOCAB_WORDS_CREATE } from './vocabActions'
export const vocabReducer = (state=[], action) => {
  switch (action.type) {
    case VOCAB_WORDS_REQUEST_SUCCESS:
      return [
        ...state,
        ...action.payload.data
      ]
    case VOCAB_WORDS_CREATE:
      const {word, reading, answer} = action.payload
      return [
        ...state,
        {
          word,
          reading,
          answer
        }
      ]
    default:
      return state;
  }
}