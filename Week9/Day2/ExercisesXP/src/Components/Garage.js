import React from 'react';
//Use an attribute to pass a size to the Garage component, <Garage size="small" />.
const Garage = ({ size }) => {
    //The Garage component should render Who lives in my <size> Garage?
    return <h2>Who lives in my {size} garage?</h2>;
};

export default Garage;