// DOM -> Document Object Model is a programming interface for HTML and XML documents. 
// It represents the page so that programs can change the document structure, style, and content. 
// The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

// The DOM is a tree-like structure where each node represents a part of the document. 
// The nodes can be elements, attributes, or text. 
// The DOM allows developers to manipulate the content and structure of web pages dynamically using JavaScript.


// console.log("Hello World");
// alert("Hello World");


// access element by id
let heading = document.getElementById("heading");
console.log(heading);
heading.style.color = "red";
heading.style.fontSize = "50px";

// access element by class
let paragraph = document.getElementsByClassName("paragraph");
console.log(paragraph);
paragraph[0].style.color = "blue";
paragraph[0].style.fontSize = "20px";