import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';
import {
  handleAuthFulfilled,
  handleAuthPending,
  handleAuthRejected,
  handleLogOutAuthFulfilled,
  handleRefreshFulfilled,
  handleRefreshPending,
  handleRefreshRejected,
} from './authSelector';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefresh: false,
    /*  isLoading: false,
    isError: false, */
  },
  // reducers: {
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleAuthFulfilled)
      .addCase(logIn.fulfilled, handleAuthFulfilled)
      .addCase(logOut.fulfilled, handleLogOutAuthFulfilled)
      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.rejected, handleRefreshRejected);
    // .addCase(register.pending, handleAuthPending)
    // .addCase(register.rejected, handleAuthRejected)
    // .addCase(logIn.pending, handleAuthPending)
    // .addCase(logIn.rejected, handleAuthRejected)
    // .addCase(logOut.pending, handleAuthPending)
    // .addCase(logOut.rejected, handleAuthRejected)
  },
});
// export const { logIn, logOut, refreshUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
