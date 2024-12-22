import { all, fork } from 'redux-saga/effects';
import authSaga from './sagas/authSaga';
import productSaga from './sagas/productSaga';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(productSaga)]);
}