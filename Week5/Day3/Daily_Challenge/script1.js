function frameWords() {
    //User input
    const input = prompt("Enter several words separated by commas:");

    //Split the input by commas to get an array of words
    const words = input.split(",").map(word => word.trim());

    //Find the length of the longest word
    const maxLength = Math.max(...words.map(word => word.length));

    //Construct the top border of the frame
    const topBorder = "*".repeat(maxLength + 4); // 2 stars on each side, plus 2 spaces

    //Print the top border
    console.log(topBorder);

    //Iterate through the words, constructing each line of the frame
    words.forEach(word => {
        const spaces = " ".repeat(maxLength - word.length);
        console.log(`* ${word}${spaces} *`); // Add 2 spaces on each side
    });

    //Print the bottom border
    console.log(topBorder);
}

//Call the function to frame the words
frameWords();