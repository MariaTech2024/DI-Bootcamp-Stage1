import React, { useState } from 'react';

const Events = () => {
    //Create an arrow function called clickMe. It should alert the string ‘I was clicked’.
    const clickMe = () => {
        alert('I was clicked');
    };

    //When you type something in the input field and press the ‘Enter key’, the handleKeyDown function will check if the ‘Enter key’ was pressed and will alert a message with the input text value
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`You pressed Enter. Input value: ${event.target.value}`);
        }
    };

    //Using the state hook, declare a state variable named isToggleOn and set it to 
    const [isToggleOn, setIsToggleOn] = useState(true);
   //Create a function that will be called by the onClick event handler. In the function you should toggle the value of the isToggleOn state variable. 
    const toggleState = () => {
        setIsToggleOn(prevState => !prevState);
    };

    return (
        <div>
            <button onClick={clickMe}>Click Me</button>
            <input type="text" onKeyDown={handleKeyDown} placeholder="Press the ENTER key!" />
            <button onClick={toggleState}>
                {isToggleOn ? 'ON' : 'OFF'}
            </button>
        </div>
    );
};

export default Events;