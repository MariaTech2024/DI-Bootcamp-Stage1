import { createSelector } from 'reselect';

const selectTasks = (state) => state.tasks;
const selectCategories = (state) => state.categories;

export const selectTasksByCategory = createSelector(
  [selectTasks, (state, categoryId) => categoryId],
  (tasks, categoryId) => tasks.filter(task => task.categoryId === categoryId)
);

export const selectCompletedTasks = createSelector(
  [selectTasks],
  (tasks) => tasks.filter(task => task.progress === 100).length
);

export const selectCategoryById = createSelector(
  [selectCategories, (state, categoryId) => categoryId],
  (categories, categoryId) => categories.find(category => category.id === categoryId)
);

export { selectCategories }; 