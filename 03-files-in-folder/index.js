const fs = require('fs');
const path = require('path');

const curPath = path.join(__dirname, 'secret-folder');

fs.readdir(curPath, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    files.forEach((file) => {
        if (file.isFile()) {
            const pathToFile = path.join(curPath, file.name);
            const pathToFileParsed = path.parse(pathToFile);
            fs.stat(pathToFile, (err, data) => {
                if (err) return 1;
                else console.log(pathToFileParsed.name + " - " + pathToFileParsed.ext.slice(1) + " - " + data.size);
            });
            
        }
    });
});
