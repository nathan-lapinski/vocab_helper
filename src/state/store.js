import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { vocabReducer } from './vocab/vocabReducer';
import vocabRequestSaga from './vocab/vocabMiddleware';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  vocabReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(vocabRequestSaga)

export default store