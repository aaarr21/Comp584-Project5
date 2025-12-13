
const http = require('http');

const url = require('url');

const port = Number(process.argv[2]);

const server = http.createServer(function (req, res) {
    // Parse request URL and extract query parameters
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const iso = parsedUrl.query.iso;
    let result;

    // Route: /api/parsetime — extract hour, minute, second from provided ISO timestamp
    if (pathname === '/api/parsetime' && iso) {
        const d = new Date(iso);
        result = {
            hour: d.getHours(),
            minute: d.getMinutes(),
            second: d.getSeconds()
        };
    // Route: /api/unixtime — return the unixtime (ms since epoch)
    } else if (pathname === '/api/unixtime' && iso) {
        result = {
            unixtime: Date.parse(iso)
        };
    }
        
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(port);