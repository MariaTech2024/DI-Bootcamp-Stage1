import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    editCategory: (state, action) => {
      const { categoryId, updates } = action.payload;
      const category = state.find(category => category.id === categoryId);
      if (category) {
        Object.assign(category, updates);
      }
    },
    deleteCategory: (state, action) => {
      return state.filter(category => category.id !== action.payload);
    }
  }
});

export const { addCategory, editCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;