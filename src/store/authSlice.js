import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false, // Initially, the user is not logged in
  userData: null, // User data will be null initially
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true; // User is logged in
      state.userData = action.payload.userData; // Store user data
    },
    logout: (state) => {
      state.status = false; // User is logged out
      state.userData = null; // Clear user data
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
