const prompt = require("prompt-sync")();
var number1 = prompt("Enter First Number:");
var number2 = prompt("Enter Second Number:");
if (number1 > number2) {
    console.log(number1, "is Greater than", number2);
} else {
    console.log(number1, "is Smaller than", number2);
}