import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './index';
import { selectCurrentToken } from './slices/authSlice';

// Use these instead of the standard `useDispatch` and `useSelector` hooks.
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Return true if user has auth token in redux store
export const isLoggedIn = () => {
  return !!useAppSelector(selectCurrentToken);
};
