const prompt = require("prompt-sync")();
let n;
n = parseInt(prompt("Enter The Size of The Array"));
let arr = [];
let x;
for (let i = 0; i < n; i++) {
    x = parseInt(prompt("Enter The Numbers: "));
    arr.push(x);
}
let new_arr = arr.filter(function(value) { return value % 2 == 0 });
for (let i = 0; i < new_arr.length; i++) {
    console.log(new_arr[i]);
}