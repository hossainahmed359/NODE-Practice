// const arr = require('./module-info');
const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");

const myPath = "F:/Repos-Home/NODE-Practice/module-info.js";

console.log("Waiting for input"); /* Returns Class */
// console.log(path.dirname(myPath));
// console.log(os.cpus().length);

// fs.writeFile('myfile.txt', "Hello World");
// fs.writeFileSync('myfile.txt', "Hello World");
// fs.appendFileSync('myfile.txt', "Hello World 2");
// fs.writeFileSync('myfile.js', "console.log('Hello Js')");

// const fileData = fs.readFileSync('myfile.txt'); /* Sync */
// const fileData = fs.readFile('myfile.txt', (err, data) => {
//     console.log(data.toString())
// ;}); /* Async */
// console.log(fileData.toString());

// global, module

const emitter = new EventEmitter();

// register a listener for do event
emitter.on("foo", function (intervalOne, intervalTwo, intervalThree, obj) {
    console.log("bar", intervalOne, intervalTwo, intervalThree, obj);
});

// Raise An Event
// emitter.emit('foo', 1, 2, 3,  {title: 'a'});

const http = require("http");

const server = http.createServer((req, res) => {
        res.write("Hello World");
        res.end();
});

// server.on("connection", (socket) => {
//     console.log("New Connection");
// });

server.listen(4000);


console.log("listening on port 4000");
