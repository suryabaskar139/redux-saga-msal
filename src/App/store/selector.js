export const selectAuthUser = (state) => state.auth.user;
export const selectAuthAccessToken = (state) => state.auth.accessToken;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;

export const selectProducts = (state) => state.products.items;
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;

export const selectIsAuthenticated = (state) => !!state.auth.user;
export const selectProductCount = (state) => state.products.items.length;