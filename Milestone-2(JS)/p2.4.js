const prompt = require("prompt-sync")();
var f = parseFloat(prompt("Enter the Temperature in Fahrenheit:"));
var cell = (f - 32) * 5;
cell = cell / 9.0;
console.log("Temperature in Celcious: " + cell);