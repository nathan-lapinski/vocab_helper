import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './vocabActions';

function* fetchVocabSaga() {
  try {
    const data = yield call(fetchTestData)
    yield put({
      type: actions.VOCAB_WORDS_REQUEST_SUCCESS,
      payload: {
        data
      }
    })
  } catch (e) {
    yield put({type: actions.VOCAB_WORDS_REQUEST_SUCCESS})
  }
}

function* vocabRequestSaga() {
  yield takeLatest(actions.VOCAB_WORDS_REQUEST, fetchVocabSaga)
}

// TEST CODE - MOCK DATA
// TODO: Move fetch logic into a proper API service, and fetch data
// from a real endpoint
const testData = [{
    word: '配送便',
    answer: 'Delivery Service'
  },{
    word: '掲載',
    answer: 'Publication'
  },{
    word: '利益',
    answer: 'Profits'
  },{
    word: '自己紹介',
    answer: 'Self Introduction'
  },{
    word: '貿易',
    answer: 'Foreign Trade'
  }]
const fetchTestData = () => (new Promise((res, rej) => {
  setTimeout(() => {
    res(testData)
  }, 1000)
}))
// END TEST CODE

export default vocabRequestSaga;