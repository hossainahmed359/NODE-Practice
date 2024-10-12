const fs = require("fs");

const testReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, "utf8");
const testWriteStream = fs.createWriteStream(`${__dirname}/output.txt`, "utf8");

// testReadStream.on("data", (chunk) => {
//     testWriteStream.write(chunk)
// });

// testReadStream.on("data", (data) => {
//     console.log(data);
// });

testReadStream.pipe(testWriteStream);

console.log("stream and buffer");
