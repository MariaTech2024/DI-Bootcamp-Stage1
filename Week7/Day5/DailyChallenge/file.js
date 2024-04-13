const fs = require('fs');

const PATH = './data/data.json';
//Read results from the JSON file
async function getResults() {
    try {
        return JSON.parse(
            fs.readFileSync(PATH, 'utf8')
        );
    } catch (err) {
        console.log(err);
    }
}
//write results to the JSON file
async function setResults(results) {
    try {
        fs.writeFileSync(PATH, JSON.stringify(results));
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = { getResults, setResults };