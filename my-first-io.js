
// load the file system module
const fs = require('fs');

// read the file
const contents = fs.readFileSync(process.argv[2]);

// convert the buffer to a string
const str = contents.toString();

// split the string on newline characters and count the segments
const lines = str.split('\n').length - 1;

// print the result
console.log(lines);