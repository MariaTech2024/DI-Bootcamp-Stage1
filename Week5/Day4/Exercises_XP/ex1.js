//Exercise 1 : Change the article
//Using a DOM property, retrieve the h1 and console.log it.
let h1 = document.querySelector("article h1");
console.log(h1);

//Using DOM methods, remove the last paragraph in the <article> tag.
let lastParagraph = document.querySelector("article p:last-child");
lastParagraph.remove();

//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2 = document.querySelector("article h2");
h2.addEventListener("click", function() {
    h2.style.backgroundColor = "red";
});

//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let h3 = document.querySelector("article h3");
h3.addEventListener("click", function() {
    h3.style.display = "none";
});

//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let button = document.createElement("button");
button.textContent = "Bold Text";
button.addEventListener("click", function() {
    let paragraphs = document.querySelectorAll("article p");
    paragraphs.forEach(p => p.style.fontWeight = "bold");
});
document.body.appendChild(button);

//BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.
h1.addEventListener("mouseover", function() {
    h1.style.fontSize = Math.floor(Math.random() * 100) + "px";
});

//BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
let secondParagraph = document.querySelector("article p:nth-child(4)");
secondParagraph.style.transition = "opacity 1s";
secondParagraph.addEventListener("mouseover", function() {
    secondParagraph.style.opacity = 0;
});