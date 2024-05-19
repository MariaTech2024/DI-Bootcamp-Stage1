import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories } from '../features/selectors';
import { addCategory, deleteCategory } from '../features/categorySlice';

const CategorySelector = ({ selectedCategoryId, onCategorySelect }) => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const handleAddCategory = () => {
    const name = prompt('Enter category name:');
    if (name) {
      dispatch(addCategory({ id: Date.now(), name }));
    }
  };

  const handleDeleteCategory = (categoryId) => {
    dispatch(deleteCategory(categoryId));
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id} onClick={() => onCategorySelect(category.id)}>
            {category.name}
            <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddCategory}>Add Category</button>
    </div>
  );
};

export default CategorySelector;