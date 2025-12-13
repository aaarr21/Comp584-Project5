
const http = require('http');

// Filesystem utilities for streaming the requested file
const fs = require('fs');

const port = process.argv[2];
const filePath = process.argv[3];

// Create HTTP server: stream file contents as response for any request
const server = http.createServer(function (req, res) {
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
});

server.listen(port);