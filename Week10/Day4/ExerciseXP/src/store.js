import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import userReducer from './features/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer
  },
});

export default store;