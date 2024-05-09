import React, { useEffect, useState } from 'react';
import './Gallery.css';

const Gallery = ({ searchTerm }) => {
    const [images, setImages] = useState([]);
    const apiKey = 'ry1E4F5DHxjRrvxANxI1UIQTTWLVaS5T43bKcA55TAt7nGoK6u8VyLGl';

    useEffect(() => {
      const fetchImages = async () => {
          if (!searchTerm) {
              setImages([]); // Clear images if the search term is empty
              return;
          }
          try {
              const response = await fetch(
                  `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchTerm)}&per_page=30`,
                  {
                      headers: {
                          Authorization: apiKey,
                      },
                  }
              );
              if (!response.ok) {
                  throw new Error(`API request failed with status ${response.status}`);
              }
              const data = await response.json();
              setImages(data.photos);
          } catch (error) {
              console.error('Error fetching images:', error);
              // Handle the error appropriately (e.g., show a message to the user)
          }
      };

      fetchImages();
  }, [searchTerm]);

  return (
      <div className="gallery">
          {images.length > 0 ? (
              images.map((photo) => (
                  <div key={photo.id} className="photo">
                      <img src={photo.src.medium} alt={photo.alt} />
                  </div>
              ))
          ) : (
              <p>No images found for "{searchTerm}"</p> // Optional: Message when no images found
          )}
      </div>
  );
};

export default Gallery;