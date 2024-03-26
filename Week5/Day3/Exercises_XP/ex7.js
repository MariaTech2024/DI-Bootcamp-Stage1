//Create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) 
let allBooks = [
    {
        title: "A Byte of Python",
        author: "Swaroop C.H.",
        image: "https://open.umn.edu/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NTA0LCJwdXIiOiJibG9iX2lkIn19--c7854918d8c5eb4d328d3db4d744945f00510adb/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemUiOiI0OTB4MTAwMCJ9LCJwdXIiOiJ2YXJpYXRpb24ifX0=--92321c91481b14cf986468483667757f1e9e4957/0000ByteOPyto.png",
        alreadyRead: true
    },
    {
        title: "JavaScript: The Definitive Guide",
        author: "D.Flanagan",
        image: "https://learning.oreilly.com/library/cover/9781491952016/250w/",
        alreadyRead: false
    }
];

//Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
let section = document.querySelector(".listBooks");
for (let book of allBooks) {
    let div = document.createElement("div");
    let titleAuthor = document.createElement("p");
    titleAuthor.textContent = `${book.title} written by ${book.author}`;
    //If the book is already read. Set the color of the book’s details to red.
    if (book.alreadyRead) {
        titleAuthor.style.color = "red";
    }
    //The width of the image has to be set to 100px.
    let img = document.createElement("img");
    img.src = book.image;
    img.width = 100;

    div.appendChild(titleAuthor);
    div.appendChild(img);
    section.appendChild(div);
}