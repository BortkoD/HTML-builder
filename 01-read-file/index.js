const fs = require('fs');
const path = require('path');


const curPath = path.join(__dirname, 'text.txt');
fs.readFile(curPath, "utf8", function (error, data) {console.log(data)});
