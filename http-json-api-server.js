
const http = require('http');

const url = require('url');

const port = Number(process.argv[2]);

const server = http.createServer(function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const iso = parsedUrl.query.iso;
    let result;

    if (pathname === '/api/parsetime' && iso) {
        const d = new Date(iso);
        result = {
            hour: d.getHours(),
            minute: d.getMinutes(),
            second: d.getSeconds()
        };
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