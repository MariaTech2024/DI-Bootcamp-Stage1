import { createSlice } from '@reduxjs/toolkit';

//Define initial state for categories slice
const initialState = {
  categories: [],
};

//Create category slice using createSlice from Redux Toolkit
const categorySlice = createSlice({
  name: 'categories', //Name of the slice
  initialState, //Initial state defined above
  reducers: {
    //Action creator to add a new category
    addCategory: (state, action) => {
      state.categories.push(action.payload); //Push new category to categories array
    },
    //Action creator to edit a category
    editCategory: (state, action) => {
      const { id, newCategory } = action.payload; //Destructure id and newCategory from payload
      const index = state.categories.findIndex(category => category.id === id); //Find index of category to be edited
      if (index !== -1) {
        state.categories[index] = newCategory; //Update category at found index
      }
    },
    //Action creator to delete a category
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(category => category.id !== action.payload); //Filter out category with given id
    },
  },
});

//Export action creators and reducer from category slice
export const { addCategory, editCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;