const prompt = require("prompt-sync")();

let arr = [];
let n;
n = parseInt(prompt("Enter The Size:"));
let x = 0;
console.log("Now Enter The Elements:")
for (let i = 0; i < n; i++) {
    x = parseInt(prompt());
    //console.log(x);
    arr.push(x);
}
let max = arr[0];
let min = arr[0];

function MaximumOf_Array(arr) {
    //console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            max = arr[i];
        } else {
            if (arr[i] > max) {
                max = arr[i];
            } else {
                min = arr[i];
            }
        }
    }
}
MaximumOf_Array(arr);
console.log(max);
console.log(min);