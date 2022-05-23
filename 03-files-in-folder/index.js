const fs = require('fs/promises');
const path = require('path');

const curPath = path.join(__dirname, 'secret-folder');

fs.readdir(curPath, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    files.forEach((file) => {
        if (file.isFile()) {
            const ext = ;
            const name;
            const size;
            console.log(name + " - " + ext + " - " + size);
        }
    });
});
