 const mymodule = require('./mymodule.js');

 const dir = process.argv[2];
 const ext = process.argv[3];

 mymodule(dir, ext, function (err, files) {
    if (err) {
        return console.error(err);
    }

    files.forEach(function (file) {
        console.log(file);
    });

 });
 