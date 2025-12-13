
const http = require('http');

const url = process.argv[2];

http.get(url, function (response) {
  // Interpret response bytes as UTF-8 strings
  response.setEncoding('utf8');

  // Print each chunk of response data as it arrives
  response.on('data', function (data) {
    console.log(data);
  });

  response.on('error', function (err) {
    console.error(err);
  });
});