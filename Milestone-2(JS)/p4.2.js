const prompt = require("prompt-sync")();
let str = prompt();

function reverseStr(str) {
    let n = str.length;
    const revArr = [];
    for (let i = n - 1; i >= 0; i--) {
        revArr.push(str[i]);
    }
    return revArr.join('|');
}
console.log(reverseStr(str));
// another Way
var arr = ['Portal', 'Science',
    'Computer', 'Math'
];
var new_arr = arr.reverse();
console.log(new_arr);