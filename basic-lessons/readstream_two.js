const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const testReadStream = fs.createReadStream(__dirname + '/bigdata.txt', 'utf8');
    testReadStream.pipe(res);
});

server.listen(4000);


console.log("stream and buffer | listening to port 4000");
