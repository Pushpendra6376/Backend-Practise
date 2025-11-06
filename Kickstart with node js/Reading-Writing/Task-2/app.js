const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        // Step 1: Read file value and show above form
        fs.readFile("formValue.txt", (err, data) => {
            const savedValue = data ? data.toString() : "";

            res.setHeader("Content-Type", "text/html");
            res.end(`
                <h1>Saved Value: ${savedValue}</h1>
                <form action="/message" method="POST">
                    <label>Name:</label>
                    <input type="text" name="username" />
                    <button type="submit">Add</button>
                </form>
            `);
        });
    }

    else if (url === "/message" && method === "POST") {
        let dataChunks = [];

        req.on("data", (chunk) => {
            dataChunks.push(chunk);
        });

        req.on("end", () => {
            let buffer = Buffer.concat(dataChunks);
            let formData = buffer.toString();     // username=Pushpendra
            let formValue = formData.split("=")[1];

            // Step 2: Save entered value to file
            fs.writeFile("formValue.txt", formValue, () => {
                res.statusCode = 302;
                res.setHeader("Location", "/");   // Redirect back to home
                res.end();
            });
        });
    }

    else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("server is running");
});
