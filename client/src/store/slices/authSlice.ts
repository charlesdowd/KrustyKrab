import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;
    },
    logOut: (state) => {
      state.accessToken = null;
    },
  },
});

// Function for grabbing current auth state
export const selectCurrentToken = (state) => state.auth.accessToken;

// Functions for executing actions on the Auth state
export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
