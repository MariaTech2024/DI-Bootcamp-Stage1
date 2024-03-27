//Daily challenge: Tell the story.
//Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault().
document.getElementById("libform").addEventListener("submit", function(event) {
    event.preventDefault();
    let noun = document.getElementById("noun").value;
    let adjective = document.getElementById("adjective").value;
    let person = document.getElementById("person").value;
    let verb = document.getElementById("verb").value;
    let place = document.getElementById("place").value;

    // Make sure the values are not empty.
    if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill in all fields!");
        return;
    }

    // Write a story that uses each of the values.
    let story = `${person} was walking through ${place} when he/she saw a ${adjective} ${noun}. He/she decided to ${verb} it.`;
    document.getElementById("story").innerText = story;
});

//Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly. 
let stories = [
    (noun, adjective, person, verb, place) => `${person} went to ${place} to buy a ${adjective} ${noun} and then decided to ${verb} it.`,
    (noun, adjective, person, verb, place) => `In ${place}, ${person} saw a ${noun} that was extremely ${adjective} and started to ${verb} it.`,
    (noun, adjective, person, verb, place) => `${person} ${verb} the ${adjective} ${noun} all around ${place}.`
];

document.getElementById("lib-button").addEventListener("click", function() {
    let noun = document.getElementById("noun").value;
    let adjective = document.getElementById("adjective").value;
    let person = document.getElementById("person").value;
    let verb = document.getElementById("verb").value;
    let place = document.getElementById("place").value;

    let randomStory = stories[Math.floor(Math.random() * stories.length)];
    document.getElementById("story").innerText = randomStory(noun, adjective, person, verb, place);
});