const fs = require("fs");
const express = require("express");
const app = express();
let testFolder = `${__dirname}/images`;

app.get((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
});

app.use("/images", express.static("images")); 

app.listen(8880)