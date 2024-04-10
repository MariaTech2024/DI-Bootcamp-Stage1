//In read-directory.js, use the fs module to read the list of files in a specified directory and display their names in the terminal.
const fs = require('fs');

const files = fs.readdirSync('.');
console.log(files);