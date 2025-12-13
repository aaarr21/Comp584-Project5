

const http = require('http');

const urls = process.argv.slice(2);

const results = []

let count = 0;

function printResults() {
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
    }
}

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