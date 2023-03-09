const prompt = require("prompt-sync")();
var name = prompt("Enter Your Name: ");
var age = prompt("Enter Your Age: ");
console.log("Hello! " + name + ` You Are ${age}` + " Year old");