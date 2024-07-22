import { configureStore } from '@reduxjs/toolkit';
import recepieReducer from './recepieSlice';
const store = configureStore({
  reducer: {
    recepieItem: recepieReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
