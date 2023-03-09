const prompt = require("prompt-sync")();
var number = prompt("Enter a Number:");
if (number % 2 == 0) {
    console.log("This Number", number, "is Even");
} else {
    console.log("This Number", number, "is Odd");
}