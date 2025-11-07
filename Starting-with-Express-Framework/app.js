//const http = require('http')  this line of code is also not required.

const express = require('express')

const app = express();
//middleware
app.use((req, res, next) =>{
    console.log("output from middleware 1");
    next();
})

app.use((req, res, next) =>{
    console.log("output from middleware 2");
    res.send(`<h1> Hello from Express</h1>`);
})
//just write 
app.listen(3000)

//below 2 code of line does not need to written because this thing is already mentioned in offcial git repo in library section
// const server = http.createServer(app)

// server.listen(3000)