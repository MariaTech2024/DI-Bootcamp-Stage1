//Exercise 2: Implement a Character Counter
//Create a React component that displays a character counter for a text input. The counter should update in real-time as the user types using the useRef hook.

import { useRef, useState } from 'react';

//Define a functional component called CharacterCounter
const CharacterCounter = () => {
    //Create a reference to the textarea element
    const inputRef = useRef('');

    //State variable to store the length of the text in the textarea
    const [textLength, setTextLength] = useState(0);

    //Function to handle changes in the textarea
    const handleInputChange = () => {
        //Update the text length state based on the current value of the textarea
        setTextLength(inputRef.current.value.length);
    };


    //Render the textarea and the character count
    return (
        <div>
            <textarea ref={inputRef} onChange={handleInputChange} placeholder="Type something..."></textarea>
            <p>Character Count: {textLength}</p>
        </div>
    );
};

export default CharacterCounter;