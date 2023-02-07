import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './index';
import { selectCurrentToken, selectUser, selectAuth } from './slices/authSlice';

// Use these instead of the standard `useDispatch` and `useSelector` hooks.
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Return the auth object
export const useAuth = () => {
  return useAppSelector(selectAuth);
};

// Return true if user has auth token in redux store
export const isLoggedIn = () => {
  return !!useAppSelector(selectCurrentToken);
};

// Return true if user in the redux store has emailVerified = true
export const emailVerified = () => {
  return useAppSelector(selectUser)?.emailVerified;
};

// This specific state of not being logged in but having emailVerified means they can set their password
export const isSettingPassword = () => {
  return !isLoggedIn() && emailVerified();
};
