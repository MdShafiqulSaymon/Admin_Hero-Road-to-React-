const prompt = require("prompt-sync")();
let a = prompt("Enter First Number:");
let b = prompt("Enter Second Number:");
let sum = parseInt(a) + parseInt(b);
let mult = parseInt(a) * parseInt(b);
let sub = parseInt(a) - parseInt(b);
console.log(sum);
console.log(mult);
console.log(sub);
if (b != 0) {
    let div = parseInt(a) / parseInt(b);
    console.log(div);
}