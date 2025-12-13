
const http = require('http');

const port = process.argv[2];

const server = http.createServer(function (req, res) {
    if (req.method != 'POST') {
        return res.end('Send a POST request\n');
    }
    
    let body = '';

    req.setEncoding('utf8');

    req.on('data', function (chunk) {
        body +=chunk;
    });

    req.on('end', function () {
        const upper = body.toUpperCase();
        res.end(upper);

    });
});

server.listen(port);