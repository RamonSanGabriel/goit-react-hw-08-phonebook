export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefresh = state => state.auth.isRefresh;

export const handleAuthFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const handleAuthPending = state => {
  state.isRefresh = true;
};

export const handleLogOutAuthFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const handleRefreshFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleRefreshRejected = state => {
  state.isRefresh = false;
};
