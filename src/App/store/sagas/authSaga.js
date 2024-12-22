import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import { login, logout, acquireToken, getCurrentUser, isAuthenticated } from '../../auth/authService';
import { authRequest, authSuccess, authFailure, logoutSuccess } from '../reducers/authSlice';

function* handleLogin() {
  try {
    yield put(authRequest());
    const response = yield call(login);
    yield put(authSuccess({ user: response.account, accessToken: response.accessToken }));
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

function* handleLogout() {
  try {
    yield call(logout);
    yield put(logoutSuccess());
  } catch (error) {
    console.error("Logout error:", error);
  }
}

function* handleSilentTokenAcquisition() {
    try {
        const tokenResponse = yield call(acquireToken)
        if(tokenResponse){
            yield put(authSuccess({ user: getCurrentUser(), accessToken: tokenResponse.accessToken }));
        } else if (!isAuthenticated()) {
            return
        } else {
            yield put({type: 'auth/authRequest'})
        }
    } catch (error) {
        console.error("silent token error", error)
    }
}

export default function* authSaga() {
  yield all([
    takeLatest('auth/authRequest', handleLogin),
    takeLatest('auth/logoutRequest', handleLogout),
    takeLatest('auth/silentTokenRequest', handleSilentTokenAcquisition),
  ])
}