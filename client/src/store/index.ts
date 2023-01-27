import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { templateApi } from './slices/api/templateApi.base';
import authReducer from './slices/authSlice';

// Default redux logger but collapsed
const customLogger = createLogger({
  collapsed: true,
});

const store = configureStore({
  reducer: {
    [templateApi.reducerPath]: templateApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(templateApi.middleware, customLogger),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
