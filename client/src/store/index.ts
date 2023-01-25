import { configureStore } from '@reduxjs/toolkit';
import { templateApi } from './slices/api/templateApi.base';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    [templateApi.reducerPath]: templateApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(templateApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
