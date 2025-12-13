
// load the required modules

const http = require('http');

const url = process.argv[2];

http.get(url, function (response) {
    // Treat response as UTF-8 text
    response.setEncoding('utf8');

    let fullData = '';

    response.on('data', function (chunk) {
        fullData += chunk;
    });

    // On end of stream, print accumulated length and full body
    response.on('end', function() {
        console.log(fullData.length);
        console.log(fullData);
    });


    response.on('error', console.error);
});