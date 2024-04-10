//Create another file named app.js.
//In app.js, import the functions from the fileManager.js module.
const { readFile, writeFile } = require('./fileManager.cjs');

// Read content from "Hello World.txt"
readFile('HelloWorld.txt')
    .then((data) => {
        console.log('Content of HelloWorld.txt:', data);//Content of HelloWorld.txt: "Hello World!!"
        // Write content to "Bye World.txt"
        return writeFile('ByeWorld.txt', 'Writing to the file');
    })
    .then(() => {
        console.log('Content successfully written to ByeWorld.txt');//Content successfully written to ByeWorld.txt
    })
    .catch((err) => {
        console.error('Error:', err);
    });