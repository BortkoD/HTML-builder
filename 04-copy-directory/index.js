const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');

const curPath = path.join(__dirname, 'files');

fsPromises.mkdir(path.join(__dirname, 'files-copy'), {recursive: true} );

fs.readdir(curPath, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    files.forEach((file) => {
        if (file.isFile()) {
            const pathToFile = path.join(curPath, file.name);
            fsPromises.copyFile(pathToFile, path.join(__dirname, 'files-copy', file.name));

        }
    });
});
