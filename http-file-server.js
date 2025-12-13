
const http = require('http');

const fs = require('fs');

const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer(function (req, res) {
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
});

server.listen(port);