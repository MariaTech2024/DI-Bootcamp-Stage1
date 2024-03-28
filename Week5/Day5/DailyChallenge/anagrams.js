//Create a function that:takes in two strings as two parameters
//and returns a boolean that indicates whether or not the first string is an anagram of the second string.

function Anagrams(str1, str2) {
    let processStr = (str) => str.replace(/\s+/g, '').toLowerCase();
    let sortStr = (str) => processStr(str).split('').sort().join('');
    
    return sortStr(str1) === sortStr(str2);
}

console.log(Anagrams("Astronomer", "Moon starer")); // True
console.log(Anagrams("School master", "The classroom")); // True
console.log(Anagrams("The Morse Code", "Here come dots")); // True
console.log(Anagrams("A Decimal Point", "I'm a Dot in Place")); // False