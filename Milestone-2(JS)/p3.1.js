const prompt = require("prompt-sync")();
var number = prompt("Enter a Number:");
if (number > 0) {
    console.log("This Number", number, "is Positive");
} else if (number == 0) {
    console.log("This Number", number, "is Zero");
} else {
    console.log("This Number", number, "is Negative");
}