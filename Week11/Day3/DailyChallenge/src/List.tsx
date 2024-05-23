import React from 'react';

// Define the props for the List component using a generic type T
interface ListProps<T> {
  items: T[]; // An array of items of type T
  renderItem: (item: T) => React.ReactNode; // A function to render each item
}

// The List component is a generic function component that accepts props of type ListProps<T>
function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {/* Map over the items array and render each item using the renderItem function */}
      {items.map((item, index) => (
        // Use the index as the key for each list item
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default List;