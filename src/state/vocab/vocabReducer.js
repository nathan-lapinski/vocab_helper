import { VOCAB_WORDS_REQUEST_SUCCESS, VOCAB_WORDS_CREATE, VOCAB_WORDS_REMOVE } from './vocabActions'
export const vocabReducer = (state=[], action) => {
  switch (action.type) {
    case VOCAB_WORDS_REQUEST_SUCCESS: {
      return [
        ...state,
        ...action.payload.data
      ]
    }
    case VOCAB_WORDS_CREATE: {
      const {id, word, reading, answer} = action.payload
      return [
        ...state,
        {
          id,
          word,
          reading,
          answer
        }
      ]
    }
    case VOCAB_WORDS_REMOVE: {
      const { id } = action.payload
      console.log(`Removing the ${id} word`)
      // TODO: Put this under test to ensure this isnt' trashing other state
      return [
        ...state.filter(word => word.id !== id)
      ]
    }
    default:
      return state;
  }
}