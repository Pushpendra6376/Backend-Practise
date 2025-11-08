// in dynamic route  we can avoid extra for large data set like if we have over 1000 of ids or roles then we unable to right that much
// lengthy code as a middleware and it is difficult to maintian so we use dynamic routes in express.

const express = require('express');

const app = express();

app.get('/welcome/:username', (req,res)=>{
    const name = req.params.username;
    const role = req.query.role;
    res.send(`Welcome ${name}, your role is ${role}`)
})

app.listen(3000, console.log("server is running"))