import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    getProductsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getProductsSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    getProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getProductsRequest, getProductsSuccess, getProductsFailure } = productSlice.actions;
export default productSlice.reducer;