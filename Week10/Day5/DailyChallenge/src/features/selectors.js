import { createSelector } from '@reduxjs/toolkit';

//Selector function to get all tasks
export const selectTasks = state => state.tasks.tasks;

//Selector function to get all categories
export const selectCategories = state => state.categories.categories;

//Selector function to get tasks filtered by category
export const selectTasksByCategory = createSelector(
  //First argument: array of input selectors
  [selectTasks, (state, categoryId) => categoryId], //Array of input selectors: tasks and categoryId
  //Second argument: result function
  (tasks, categoryId) => tasks.filter(task => task.categoryId === categoryId) // Filtering tasks by categoryId
);

// Selector function to get number of completed tasks
export const selectCompletedTasks = createSelector(
  //First argument: array of input selectors
  [selectTasks], //Array of input selectors: tasks
  //Second argument: result function
  tasks => tasks.filter(task => task.progress === 100).length //Counting tasks with progress === 100
);

//Selector function to get category by id
export const selectCategoryById = createSelector(
  //First argument: array of input selectors
  [selectCategories, (state, categoryId) => categoryId], //Array of input selectors: categories and categoryId
  //Second argument: result function
  (categories, categoryId) => categories.find(category => category.id === categoryId) //Finding category by categoryId
);