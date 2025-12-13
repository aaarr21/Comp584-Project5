// load the fs and path modules
const fs = require('fs');
const path = require('path');

// export the function to filter files by extension
module.exports = function (dir, ext, callback) {
    const extension = '.' + ext;

    // Read directory entries asynchronously
    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err);
        }

        // Filter files by matching path.extname to the requested extension
        const filtered = list.filter(function (file) {
            return path.extname(file) === extension;
        });

        callback(null, filtered);
    });
    };