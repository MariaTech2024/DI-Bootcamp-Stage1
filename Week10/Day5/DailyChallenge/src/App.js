import React, { useState } from 'react';
import TaskList from './components/TaskList';
import CategorySelector from './components/CategorySelector';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
      <div>
        <CategorySelector selectedCategoryId={selectedCategory} onCategorySelect={setSelectedCategory} />
        {selectedCategory && <TaskList categoryId={selectedCategory} />}
      </div>
  );
};

export default App;