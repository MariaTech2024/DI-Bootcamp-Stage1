import React, { useState } from 'react';

function Phone() {
    //PartI:Create a new Functional Component named Phone. Use the state hook to create the following state variables
    const brand = "Samsung";
    const model= "Galaxy S20";
    const [color, setColor] = useState("black");
    const year = 2020;

    // PartII:In the Phone component create a function named changeColor that updates the state variable to ‘blue’

    const changeColor = () => {
        setColor("blue");
    };

    // Displaying the phone details and the button with an onClick event that will call the changeColor function to change the color state variable.
    return (
        <div>
            <h1>My phone is a {brand}</h1>
            <p>It is a {color} {model} from {year}</p>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default Phone;