const prompt = require("prompt-sync")();
let a = prompt();
let b = prompt();
let c = prompt();
if (a * a == (b * b) + (c * c)) {
    console.log("This is Pythagorean triple");
} else if (b * b == (a * a) + (c * c)) {
    console.log("This is Pythagorean triple");
} else if (c * c == (b * b) + (a * a)) {
    console.log("This is Pythagorean triple");
} else {
    console.log("This is Not a Pythagorean triple");
}