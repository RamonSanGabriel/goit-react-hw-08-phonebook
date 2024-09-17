import { createSlice } from '@reduxjs/toolkit';
import {
  handleAuthFulfilled,
  handleAuthPending,
  handleLogOutAuthFulfilled,
  handleRefreshFulfilled,
} from './authSelector';

import { register, logIn, logOut, refreshUser } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { email: null, password: null },
    token: null,
    isLoggedIn: false,
    isRefresh: false,
  },
  // reducers: {
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleAuthFulfilled)
      .addCase(logIn.fulfilled, handleAuthFulfilled)
      .addCase(logOut.fulfilled, handleLogOutAuthFulfilled)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.pending, handleAuthPending),

  // },
});
// export const { logIn, logOut, refreshUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
