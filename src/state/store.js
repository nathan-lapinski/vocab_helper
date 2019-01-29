import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { loadState, saveState } from '../localStorage/localStorage'

import { vocabReducer } from './vocab/vocabReducer';
import vocabRequestSaga from './vocab/vocabMiddleware';

const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState()
const store = createStore(
  vocabReducer,
  persistedState,
  applyMiddleware(sagaMiddleware)
)

// write the state to local storage each time the store updates
store.subscribe(() => {
  saveState(store.getState())
})

sagaMiddleware.run(vocabRequestSaga)

export default store