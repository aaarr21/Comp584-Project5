// load the net module
const net = require('net');

// helper function to zero-fill single digit numbers
function zeroFill(n) {
    return n < 10 ? '0' + n : n;
}

// function to format the current date and time

function formatTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = zeroFill(now.getMonth() + 1);
    const day = zeroFill(now.getDate());
    const hour = zeroFill(now.getHours());
    const minute = zeroFill(now.getMinutes());

    return `${year}-${month}-${day} ${hour}:${minute}`;
}

// get the port number from command line arguments
const port = process.argv[2];
// create the server
const server = net.createServer(function (socket) {
    socket.end(formatTime() + '\n');
});
// have the server listen on the specified port
server.listen(port);