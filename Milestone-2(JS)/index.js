console.log("Bismillah! Allah!")
var a = "saymon";
console.log(a);
let full_name = 'MD.SHAFIQUL HASAN';
console.log(full_name);

let intersteRate = 0.3;
console.log(intersteRate);

const Rate = 1.0; // It Will never change;
console.log(Rate);

//Premetive Data Types
let Name = "saymon"; //String Literal
let age = 23; //Number Literal
let isApproved = true; //Boolean Literal
let firstName = undefined;
let selectedColor = null;

/*  'let' is Dynamic type dataType like
   let name="Saymon";
   type of name=>> 'String'

   name=1;
   type of name=>> 'Number'

   look datatype are change;

 */
console.log(typeof name);
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof firstName);
console.log(typeof selectedColor);


// Reference Data Types- Object,Array ,Funtion;

let person = {
    name: 'Saymon',
    age: 23
};
//1st way to access
console.log(person);
//2nd way
person.name = "SAYMON";
console.log(person);

//3rd way--bracket Properties
let tellName = 'name';
person[tellName] = "MD.SHAFIQUL HASAN" //Eta onake important
console.log(person);

//Arrays-------------
let seletedColors = ['red', 'green', 3]
seletedColors[5] = 'Blue';
console.log(seletedColors); //[ 'red', 'green', 3, <2 empty items>, 'Blue' ]
console.log(seletedColors.length);
let arr = new Array();
arr = [{
    name: "SAAYMON",
    age: 22,
}, {
    name: "JAYED",
    age: 17
}]
console.log(arr);

// const json_format = [{
//         name: "JONH",
//         age: 22
//     },
//     {
//         name: "TINU",
//         age: 17
//     }
// ];
// const todoJSON_Formate = JSON.stringify(arjson_formatr);
// console.log(todoJSON_Formate);

// ----------------Input taking-----------------

//readLine(prompt): Reads a string value from a user
//readInt(prompt): Reads an integer value from a user
//readFloat(prompt): Reads a float value from a user


// --------------------Looping----------------------
for (let i = 0; i < 10; i++) {
    console.log("Hello Worls!");
}
var i = 0;
while (i < 3) {
    console.log(`Loop Number: ${i}`);
    i++;
}
let arrr = new Array();
for (let j = 0; j < 20; j++) {
    arrr.push(j);
}
for (var j = 0; j < arrr.length; j++) {
    console.log(`In Array:${arrr[j]}`);
}
let Info = new Array();
Info = [{ name: "SAYMON", age: 22 }, { name: "SADIN", age: 22 }, { name: "JAYED", age: 17 }, { name: "JONH", age: 23 }];
for (let tel of Info) {
    console.log(`Name:${tel.name}`);
    console.log(`Age:${tel.age}`);
    console.log(`-------`);
}

//--------------- Array Operation :forEach(),map,filter,reduce etc----------
// 1.forEach:
let num = [10, 20, 30, 40, 50];
num.forEach(function(value) { console.log(value) }); //--->10 20 30 40 50
num.forEach(function(value, index) { console.log(value, index) }); //value--->10 20 30 40 50
//index--->0  1  2  3  4
num.forEach(function(value, index, num) { console.log(value, index) });
// 3- type er forEach Method hoi,1.value ,value+index,value_index+array. Ar eta as a function hishebe nai.