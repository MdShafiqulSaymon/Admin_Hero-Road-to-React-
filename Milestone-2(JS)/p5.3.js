const prompt = require("prompt-sync")();

let arr = [];
let n;
n = parseInt(prompt("Enter The Number of Person:"));
let people = [];
let names;
let age;
for (let i = 0; i < n; i++) {
    names = prompt("Enter Your Name: ");
    age = parseInt(prompt("Enter Your Age: "));
    let persons = { names, age };
    people.push(persons);
}
let oldest_person;
let max_age = people[0].age;
for (let i = 0; i < n; i++) {
    if (people[i].age > max_age) {
        max_age = people[i].age;
        oldest_person = people[i].names;
    }
}
console.log("The Oldest Person is : MR." + oldest_person + " And His/Her Age is: " + max_age);