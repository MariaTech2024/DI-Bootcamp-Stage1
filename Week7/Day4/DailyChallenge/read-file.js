import fs from 'fs';

export default function readFileContent() {
  fs.readFile('./files/file-data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:', data);
  });
}