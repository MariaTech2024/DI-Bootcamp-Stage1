import React from 'react';
import { useState } from 'react';
import Garage from './Garage';

//In the Car.js component render a header with the carInfo model, for example This car is <model>.

const Car = ({ model }) => {
    //Use the state hook in the Car component to add a color variable to the state.
    const [color, setColor] = useState('red');

    return (
        <div>
            <h1>This car is {color} {model}</h1>
            <Garage size="small" />
        </div>
    );
};

export default Car;