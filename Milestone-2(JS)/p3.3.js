const prompt = require("prompt-sync")();
var age = prompt("Enter a Age:");
if (age < 18) {
    console.log("You Are not Enough to vote!");
} else {
    console.log("Yoo! You can give your Vote");
}