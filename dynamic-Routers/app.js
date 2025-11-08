const express = require('express');

const app = express();

app.get('/welcome/:username', (req,res)=>{
    const name = req.params.username;
    const role = req.query.role;
    res.send(`Welcome ${name}, your role is ${role}`)
})

app.listen(3000, console.log("server is running"))