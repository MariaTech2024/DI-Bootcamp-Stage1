//EXERCISE 3: JSON Mario

const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

//Convert this JS object into a JSON object. What happens to the nested objects?
const marioGameJSON = JSON.stringify(marioGame);//nested objects are preserved and represented as a string.
console.log(marioGame);

//Convert and pretty print this JS object into a JSON object. 
const marioGamePrettyJSON = JSON.stringify(marioGame, null, 2);
console.log(marioGamePrettyJSON);//print a formatted JSON string to the console with a two-space indentation for each level in the JSON structure.