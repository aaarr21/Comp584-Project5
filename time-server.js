
const net = require('net');

function zeroFill(n) {
    return n < 10 ? '0' + n : n;
}

function formatTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = zeroFill(now.getMonth() + 1);
    const day = zeroFill(now.getDate());
    const hour = zeroFill(now.getHours());
    const minute = zeroFill(now.getMinutes());

    return `${year}-${month}-${day} ${hour}:${minute}`;
}

const port = process.argv[2];

const server = net.createServer(function (socket) {
    socket.end(formatTime() + '\n');
});

server.listen(port);