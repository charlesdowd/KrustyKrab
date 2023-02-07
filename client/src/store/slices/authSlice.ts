import { createSlice } from '@reduxjs/toolkit';
import { templateApi } from './api/templateApi.generated';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    user: null,
  },
  reducers: {
    //  Used on login
    setCredentials: (state, action) => {
      const { accessToken, user } = action.payload;
      state.accessToken = accessToken;
      state.user = user;
    },
    // Used when accessToken is stale and we use our refresh token
    setAcessToken: (state, action) => {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;
    },
    setUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    logOut: (state) => {
      state.accessToken = null;
    },
  },
  // Automatically update state after these endpoints are fulfilled
  extraReducers: (builder) => {
    builder.addMatcher(
      templateApi.endpoints.verifyEmail.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
      },
    );

    builder.addMatcher(
      templateApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.user = payload.user;
      },
    );
  },
});

// Function for grabbing current auth state
export const selectAuth = (state) => state.auth;
export const selectCurrentToken = (state) => state.auth.accessToken;
export const selectUser = (state) => state.auth.user;

// Functions for executing actions on the Auth state
export const { setCredentials, setAcessToken, logOut, setUser } =
  authSlice.actions;

export default authSlice.reducer;
