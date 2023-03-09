const prompt = require("prompt-sync")();
var a = parseInt(prompt());
var b = parseInt(prompt());

function summation(a, b) {
    return a + b;
}
console.log("Summation of ", a, "and ", b, " is: ", summation(a, b));