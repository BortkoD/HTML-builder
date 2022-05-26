const fs = require('fs');
const path = require('path');


const curPath = path.join(__dirname, 'text.txt');
let reader = fs.createReadStream(curPath);

reader.on('data', (data) => { console.log(data.toString()) });
