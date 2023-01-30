import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    user: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, user } = action.payload;
      state.accessToken = accessToken;
      state.user = user;
    },
    logOut: (state) => {
      state.accessToken = null;
    },
  },
});

// Function for grabbing current auth state
export const selectCurrentToken = (state) => state.auth.accessToken;
export const selectUser = (state) => state.auth.user;

// Functions for executing actions on the Auth state
export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
