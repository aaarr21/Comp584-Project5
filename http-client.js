// load the http module
const http = require('http');
// get the URL from command line arguments
const url = process.argv[2];

// make an HTTP GET request to the URL
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