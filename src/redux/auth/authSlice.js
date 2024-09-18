import { createSlice } from '@reduxjs/toolkit';
import {
  handleAuthFulfilled,
  handleAuthPending,
  handleAuthRejected,
  handleLogOutAuthFulfilled,
  handleRefreshFulfilled,
  handleRefreshRejected,
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
      .addCase(register.pending, handleAuthPending)
      .addCase(register.fulfilled, handleAuthFulfilled)
      .addCase(register.rejected, handleRefreshRejected)
      .addCase(logIn.pending, handleAuthPending)
      .addCase(logIn.fulfilled, handleAuthFulfilled)
      .addCase(logIn.rejected, handleRefreshRejected)
      .addCase(logOut.pending, handleAuthPending)
      .addCase(logOut.fulfilled, handleLogOutAuthFulfilled)
      .addCase(logOut.rejected, handleAuthRejected)
      .addCase(refreshUser.pending, handleAuthPending)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.rejected, handleRefreshRejected),

  // },
});
// export const { logIn, logOut, refreshUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
