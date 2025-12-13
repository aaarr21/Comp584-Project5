
const http = require('http');

const port = process.argv[2];

const server = http.createServer(function (req, res) {
    // Only accept POST requests — other methods are not handled
    if (req.method != 'POST') {
        return res.end('Send a POST request\n');
    }
    
    let body = '';

    // Decode request bytes as UTF-8 text
    req.setEncoding('utf8');

    req.on('data', function (chunk) {
        body +=chunk;
    });

    // When we've received all data, convert collected body to uppercase
    req.on('end', function () {
        const upper = body.toUpperCase();
        res.end(upper);

    });
});

server.listen(port);