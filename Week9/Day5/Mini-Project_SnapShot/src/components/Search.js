import React, { useState } from 'react';
import Gallery from './Gallery';
import './Search.css';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showGallery, setShowGallery] = useState(false);

    const handleSearch = () => {
        setShowGallery(true);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {showGallery && <Gallery searchTerm={searchTerm} />}
        </div>
    );
};

export default Search;
