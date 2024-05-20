import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/selectors';


//Component for selecting a category
const CategorySelector = ({ selectedCategoryId, setSelectedCategoryId }) => {
  //Get categories from Redux store
  const categories = useSelector(selectCategories);

  return (
    <div>
      {/* Title */}
      <h2>Categories</h2>
      {/* Dropdown menu for selecting a category */}
      <select value={selectedCategoryId || ''} onChange={e => setSelectedCategoryId(e.target.value)}>
        {/* Default option */}
        <option value="">Select a category</option>
        {/* Map through categories and create an option for each */}
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;