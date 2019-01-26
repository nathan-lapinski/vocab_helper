import { VOCAB_WORDS_REQUEST_SUCCESS } from './vocabActions'
export const vocabReducer = (state=[], action) => {
  switch (action.type) {
    case VOCAB_WORDS_REQUEST_SUCCESS:
      return [
        ...state,
        ...action.payload.data
      ]
    default:
      return state;
  }
}