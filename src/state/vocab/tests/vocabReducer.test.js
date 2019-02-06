import { vocabReducer } from '../vocabReducer'
import { VOCAB_WORDS_CREATE, VOCAB_WORDS_REMOVE} from '../../vocab/vocabActions'

describe(`The Vocab Reducer`, () => {
  let word1, word2

  beforeEach(() => {
    word1 = {
      id: '123',
      word: 'test',
      reading: 'test',
      answer: 'test'
    }
    word2 = {
      id: '456',
      word: 'new',
      reading: 'new',
      answer: 'new'
    }
  })
  it(`Should create a new word`, () => {
    const state = [word1]
    const action = {
      type: VOCAB_WORDS_CREATE,
      payload: {...word2}
    }

    const newState = vocabReducer(state, action)
    expect(newState).toEqual(state.concat(word2))
  })

  it('Should delete a word by id', () => {
    const state = [word1, word2]
    const action = {
      type: VOCAB_WORDS_REMOVE,
      payload: {
        id: word2.id
      }
    }

    const newState = vocabReducer(state, action)
    expect(newState).toEqual([word1])
  })
})