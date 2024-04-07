//Create three functions. The two first functions should return a promise.
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

  //function converts the morse json string provided above to a morse javascript object.
  function toJs() {
    return new Promise((resolve, reject) => {
        const morseJS = JSON.parse(morse);
        //if the morse javascript object is empty, throw an error (use reject)
        if (Object.keys(morseJS).length === 0) {
            reject(new Error ('The Morse string is empty!'));
        //return the morse javascript object (use resolve)
        } else {
            resolve(morseJS);
        }
    });
}

//The second function called toMorse(morseJS), takes one argument: the new morse javascript object. 
//This function asks the user for a word or a sentence.
function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const userInput = prompt('Enter a word or sentence:');
        const morseTranslation = [];

        for (let char of userInput.toLowerCase()) {
            if (morseJS[char]) {
                morseTranslation.push(morseJS[char]);
            //if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
            } else {
                reject(`The character "${char}" cannot be translated to Morse code!`);
                return;
            }
        }

        resolve(morseTranslation);
    });
}

//The third function called joinWords(morseTranslation), takes one argument: the morse translation array
//this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
function joinWords(morseTranslation) {
    const morseString = morseTranslation.join('\n');
    alert(morseString);
}

//Chain the three functions
toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.error(error));
