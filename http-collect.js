
// load the required modules

const http = require('http');

const url = process.argv[2];

http.get(url, function (response) {
    response.setEncoding('utf8');

    let fullData = '';

    response.on('data', function (chunk) {
        fullData += chunk;
    });

    response.on('end', function() {
        console.log(fullData.length);
        console.log(fullData);
    });


    response.on('error', console.error);
});