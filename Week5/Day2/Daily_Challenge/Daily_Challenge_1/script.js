//Daily challenge: Not Bad
//Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
let sentence = 'The movie is not that bad, I like it'
console.log(sentence);

//Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let wordNot = sentence.indexOf("not")
console.log(wordNot);

//Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
let wordBad = sentence.indexOf("bad")
console.log(wordBad);

//If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result. 
if (wordNot < wordBad && wordNot !== -1) {

    let beforeNot = sentence.substring(0, wordNot);
    let afterBad = sentence.substring(wordBad + 3); 
    sentence = beforeNot + "good" + afterBad;
}
console.log(sentence);
