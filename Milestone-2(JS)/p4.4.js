const prompt = require("prompt-sync")();

let x = parseInt(prompt("Enter The Number: "));
let f = false;
for (let i = 2; i * i < x; i++) {
    if (x % i == 0) {
        f = true;
        //console.log("klsjdk", i);
    }
}
if (f == true) {
    console.log("This is Not Prime!");
} else console.log("This is prime");