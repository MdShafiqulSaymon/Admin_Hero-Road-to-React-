const prompt = require("prompt-sync")();

let arr = [];
let n;
n = parseInt(prompt("Enter The Size:"));
let x = 0;

console.log("Now Enter The Elements:");
for (let i = 0; i < n; i++) {
    x = prompt();
    arr.push(x);
}
let max = arr[0].length;
let min = arr[0].length;
let s1 = arr[0];
let s2 = arr[0];

function MaximumOf_Array(arr) {
    //console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            max = arr[i].length;
        } else {
            if (arr[i].length > max) {
                max = arr[i].length;
                s1 = arr[i];
            } else if (arr[i].length < min) {
                min = arr[i].length;
                s2 = arr[i];
            }
        }
    }
}
MaximumOf_Array(arr);
console.log("The Longest String :" + s1 + "  length is- " + max);
console.log("The Sortest String :" + s2 + "  length is- " + min);