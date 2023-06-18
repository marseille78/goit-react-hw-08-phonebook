import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh, register } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handlePendingRefresh = (state) => {
  state.isLoading = true;
  state.isRefreshing = true;
};

const handleFulfilled = (state, { payload }) => {
  state.user.name = payload.user.name;
  state.user.email = payload.user.email;
  state.token = payload.token;
  state.error = null;
  state.isLoading = false;
  state.isLoggedIn = true;
};

const handleFulfilledRefresh = (state, { payload }) => {
  // state.user.name = payload.user.name;
  state.user.name = payload.name;
  // state.user.email = payload.user.email;
  state.user.email = payload.email;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
  state.isLoading = false;
};

const handleFulfilledLogout = (state) => {
  state.user.name = null;
  state.user.email = null;
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = false;
  state.error = payload;
};

const handleRejectedLogout = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
}

const handleRejectedRefresh = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(register.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(login.rejected, handleRejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, handleFulfilledLogout)
      .addCase(logout.rejected, handleRejectedLogout)
      .addCase(refresh.pending, handlePendingRefresh)
      .addCase(refresh.fulfilled, handleFulfilledRefresh)
      .addCase(refresh.rejected, handleRejectedRefresh);
  },
});

export default authSlice.reducer;
