import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import productReducer from './reducers/productSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
});

export default rootReducer;