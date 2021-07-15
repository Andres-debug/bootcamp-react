import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/users';

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
