

const http = require('http');

// URLs to fetch, from command-line arguments
const urls = process.argv.slice(2);

// Buffer to store each response body in the input order
const results = []

// Count of completed requests
let count = 0;

// Print the results in the same order as input URLs
function printResults() {
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
    }
}

// Fetch URL at given index, store response body at that index in results
function httpGet(index) {
    http.get(urls[index], function (response) {
    response.setEncoding('utf8');

    let data = '';
    response.on('data', function (chunk) {
        data += chunk

    });

    response.on('end', function () {
        results[index] = data;
        count++;

        if (count === urls.length) {
            printResults();
        }
    });

    response.on('error', console.error);
    }).on('error', console.error);

}
for (let i = 0; i <urls.length; i++) {
    httpGet(i);

    
}