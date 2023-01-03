import { configureStore } from '@reduxjs/toolkit';
import { templateApi } from './slices/base/templateApi.base';

const store = configureStore({
  reducer: {
    [templateApi.reducerPath]: templateApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(templateApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
