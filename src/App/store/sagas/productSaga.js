import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchProducts } from '../../utils/apiUtils';
import { getProductsRequest, getProductsSuccess, getProductsFailure } from '../reducers/productSlice';
import { acquireToken } from '../../auth/authService';

function* handleGetProducts() {
  try {
    yield put(getProductsRequest());
    const tokenResponse = yield call(acquireToken);
    if (!tokenResponse) {
      throw new Error("No token acquired")
    }
    const products = yield call(fetchProducts, tokenResponse.accessToken);
    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsFailure(error.message));
  }
}

export default function* productSaga() {
    yield takeLatest('products/getProductsRequest', handleGetProducts);
  }