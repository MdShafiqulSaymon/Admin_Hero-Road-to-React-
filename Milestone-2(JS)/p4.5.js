const prompt = require("prompt-sync")();

let arr = [];
let n;
n = parseInt(prompt("Enter The Size:"));
let x = 0;
console.log("Now Enter The Elements:")
for (let i = 0; i < n; i++) {
    x = parseInt(prompt());
    arr.push(x);
}

function AverageOf_Array(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total / arr.length;
}
console.log(AverageOf_Array(arr));