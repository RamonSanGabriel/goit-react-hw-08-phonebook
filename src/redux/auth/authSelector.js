export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefresh = state => state.auth.isRefresh;

export const handleAuthRejected = (state, action) => {
  state.isLoading = false;
  state.isError = true;
};
export const handleAuthFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const handleAuthPending = state => {
  state.isLoading = true;
};

export const handleLogOutAuthFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const handleRefreshPending = state => {
  state.isRefresh = true;
};
export const handleRefreshFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefresh = false;
};

export const handleRefreshRejected = state => {
  state.isRefresh = false;
  state.isError = true;
  state.isLoggedIn = false;
};
