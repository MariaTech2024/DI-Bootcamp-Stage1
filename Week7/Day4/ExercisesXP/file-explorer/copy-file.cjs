//Exercise 7: Reading and Copying Files
//In copy-file.js, use the fs module to read the content from a file named source.txt and then write the same content to a new file named destination.txt.
const fs = require('fs');

const content = fs.readFileSync('source.txt', 'utf8');
fs.writeFileSync('destination.txt', content);