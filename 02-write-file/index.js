const path = require('path');
const fs = require('fs');
const readline = require('readline');
const process = require('process');
var rl = readline.createInterface(process.stdin, process.stdout);

var curPath = path.join(__dirname, 'text.txt');

console.log("Hello! Type here your text: ");
fs.writeFile(curPath, '', (err) => {
    if (err) {
        return console.log(err);
    };
});

rl.on('line', (input) => {
    if (input == 'exit') {
        console.log("That's all. Thank you!");
        rl.close();
    }
    else fs.appendFile(curPath, input + '\n', (err) => {
        if (err) {
            return console.log(err);
        };
    });
});
rl.on('SIGINT', () => {
    console.log("That's all. Thank you!");
    rl.close();
});