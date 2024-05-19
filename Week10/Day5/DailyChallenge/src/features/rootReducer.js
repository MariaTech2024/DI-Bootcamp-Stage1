import { combineReducers } from 'redux';
import taskReducer from './taskSlice';
import categoryReducer from './categorySlice';

const rootReducer = combineReducers({
  tasks: taskReducer,
  categories: categoryReducer
});

export default rootReducer;