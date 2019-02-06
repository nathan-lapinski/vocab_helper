import { mapStateToProps } from '../containers/VocabListContainer'

describe(`The VocabListContainer Component`, () => {
  describe(`mapStateToProps`, () => {
    it(`should map the state to props correctly`, () => {
      const testWord = {
        kanji: 'テスト',
        reading: 'てすと',
        answer: 'Test'
      }

      const appState = [
        testWord
      ]

      const ownProps = {
        vocabWords: []
      }

      const componentState = mapStateToProps(appState, ownProps)
      expect(componentState).toEqual({vocabWords: [testWord]})
    })
  })
})