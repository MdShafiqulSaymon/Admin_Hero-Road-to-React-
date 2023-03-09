const prompt = require("prompt-sync")();

function Chnage_To_UpperCase(str) {
    let temp = [];
    for (let i = 0; i < str.length; i++) {
        let upperCase = str[i].toUpperCase();
        temp.push(upperCase);
    }
    let ReadyStr = temp.join('');
    return ReadyStr;

}

let str;
str = prompt("Enter The String :");
let new_str = Chnage_To_UpperCase(str);
console.log("New String With All UpperCase: " + new_str);