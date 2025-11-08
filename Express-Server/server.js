const express = require('express')
const app = express();

app.get('/',(req, res) =>{
    res.send("Welcome to my first Express server!");
})

app.listen(3000, () =>{
    console.log("Server is up and running on port 3000! Ready to handle requests.");
})