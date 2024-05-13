import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

function FavoritesPage({ favorites, removeFromFavorites }) {
  return (
    <div>
      <h1>Favorites Page</h1>
      <Link to="/">Back to Weather Page</Link> {/* Link to navigate back to Weather Page */}
      <List>
        {/* Map through favorites array and render each favorite */}
        {favorites.map((fav, index) => (
          <ListItem key={index}>
            {/* Display the favorite city */}
            <ListItemText primary={fav} />
            {/* Button to remove the favorite */}
            <button onClick={() => removeFromFavorites(fav)}>Remove</button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default FavoritesPage;