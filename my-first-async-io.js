
// load the fs module
const fs = require('fs');

// read the file asynchronously
fs.readFile(process.argv[2], 'utf8', function (err, data) {
    if (err) {
        return console.error(err);
    }

    const lines = data.split('\n').length - 1;
    console.log(lines);
});