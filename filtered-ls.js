// load the fs and path modules
const fs = require('fs');
const path = require('path');

// get the folder and extension from command line arguments
const folder = process.argv[2];
const extension = '.' + process.argv[3];

// read the directory asynchronously and list files matching extension
fs.readdir(folder, function (err, files) {
    if (err) {
        return console.error(err);
    }

    files.forEach(function (file) {
        // use path.extname to compare file extensions
        if (path.extname(file) === extension) {
            console.log(file);
        }
    });

});
