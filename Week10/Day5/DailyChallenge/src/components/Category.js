import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, editCategory, deleteCategory } from '../features/categorySlice';
import { deleteTasksByCategory } from '../features/taskSlice';
import { selectCategories } from '../features/selectors';
import './category.css';

const Category = () => {
  //Redux hooks to access state and dispatch actions
  const categories = useSelector(selectCategories); //Get categories from Redux store
  const dispatch = useDispatch(); //Get dispatch function to dispatch actions

  //State variables for managing new category input, edit category input, and editing state
  const [newCategoryName, setNewCategoryName] = useState(''); //State for new category name
  const [editCategoryName, setEditCategoryName] = useState(''); //State for edited category name
  const [categoryIdBeingEdited, setCategoryIdBeingEdited] = useState(null); //State to track which category is being edited

  //Function to handle adding a new category
  const handleAddCategory = () => {
    if (newCategoryName) { //Check if new category name is not empty
      const newCategory = { id: Date.now().toString(), name: newCategoryName }; // Create new category object
      dispatch(addCategory(newCategory)); //Dispatch action to add new category to Redux store
      setNewCategoryName(''); //Clear input field after adding category
    }
  };

  //Function to handle editing a category
  const handleEditCategory = (id, name) => {
    setCategoryIdBeingEdited(id); //Set the category ID being edited
    setEditCategoryName(name); //Set the current category name for editing
  };

  //Function to save the edited category name
  const handleSaveEdit = (id) => {
    dispatch(editCategory({ id, newCategory: { id, name: editCategoryName } })); // Dispatch action to edit category
    setCategoryIdBeingEdited(null); //Reset editing state
    setEditCategoryName(''); //Clear edit category name input
  };

  //Function to handle deleting a category
  const handleDeleteCategory = (id) => {
    dispatch(deleteCategory(id)); //Dispatch action to delete category
    dispatch(deleteTasksByCategory(id)); //Dispatch action to delete tasks associated with the category
  };

  //Render the component
  return (
    <div className="category-container">
      <input 
        className="category-input"
        type="text" 
        value={newCategoryName} 
        onChange={e => setNewCategoryName(e.target.value)} 
        placeholder="New category name" 
      />
      <button className="category-button" onClick={handleAddCategory}>Add Category</button>
      <ul className="category-list">
        {categories.map(category => (
          <li key={category.id} className="category-item">
            {categoryIdBeingEdited === category.id ? (
              <div className="edit-category-container">
                <input 
                  className="edit-category-input"
                  type="text" 
                  value={editCategoryName} 
                  onChange={e => setEditCategoryName(e.target.value)} 
                  placeholder="Edit category name" 
                />
                <button className="edit-category-button" onClick={() => handleSaveEdit(category.id)}>Save</button>
                <button className="edit-category-button" onClick={() => setCategoryIdBeingEdited(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                {category.name}
                <div>
                  <button className="category-button" onClick={() => handleEditCategory(category.id, category.name)}>Edit</button>
                  <button className="category-button" onClick={() => handleDeleteCategory(category.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;