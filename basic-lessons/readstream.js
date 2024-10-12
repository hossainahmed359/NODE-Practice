const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const html = /* HTML */ `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <title>Title and Description Form</title>
                </head>
                <body>
                    <h2>Submit a Title and Description</h2>

                    <form action="/submit-form" method="POST">
                        <!-- Title Input -->
                        <label for="title">Title:</label><br />
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                        /><br /><br />

                        <!-- Textarea for Description -->
                        <label for="description">Description:</label><br />
                        <textarea
                            id="description"
                            name="description"
                            rows="5"
                            cols="33"
                            required
                        ></textarea
                        ><br /><br />

                        <!-- Submit Button -->
                        <input type="submit" value="Submit" />
                    </form>
                </body>
            </html>
        `;
        res.write(html);
        res.end();
    } else if (req.url === "/submit-form" && req.method === "POST") {
        const body = [];

        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            console.log("stream finished! Showing Parsed Data");

            const parsedBody = Buffer.concat(body).toString();
            setTimeout(() => {
                console.log(parsedBody);
            }, 2000);
            res.write("Form Submitted!");
            res.end();
        });

        
    } else {
        res.write("Not Found!");
        res.end();
    }
});

server.listen(4000);

// const fs = require("fs");

// const testReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, "utf8");

// testReadStream.on("data", (data) => {
//     console.log(data);
// });

console.log("stream and buffer");
