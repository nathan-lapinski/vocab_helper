import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './vocabActions';

// TODO: This saga is currently a no-op, since words are pulled from local storage
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

const fetchTestData = () => Promise.resolve([])

function* vocabRequestSaga() {
  yield takeLatest(actions.VOCAB_WORDS_REQUEST, fetchVocabSaga)
}

export default vocabRequestSaga;