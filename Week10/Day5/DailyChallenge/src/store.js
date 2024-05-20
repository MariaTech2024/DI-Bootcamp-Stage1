import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './features/taskSlice';
import categoryReducer from './features/categorySlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    categories: categoryReducer
  },
  
});

export default store;