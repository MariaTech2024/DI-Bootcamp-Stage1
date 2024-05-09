import React from 'react';
import Gallery from './Gallery';

const Mountain = () => {
    return <Gallery searchTerm="mountain" />;
};

const Beaches = () => {
    return <Gallery searchTerm="beaches" />;
};

const Birds = () => {
    return <Gallery searchTerm="birds" />;
};

const Food = () => {
    return <Gallery searchTerm="food" />;
};

export { Mountain, Beaches, Birds, Food };