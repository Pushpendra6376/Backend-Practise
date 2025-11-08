// middleware are used to perform reqest and responses in a series.

/* Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.

*/


const express = require('express')

const app = express();
//middleware 1
app.use((req,res,next)=>{
    console.log("Output from middleware 1");
    next();
})
//middleware 2
app.use((req,res,next)=>{
    console.log("Output from middleware 2");
    next();
})
//middleware 3
app.use((req,res,next)=>{
    console.log("Output from middleware 3");
})

app.listen(3000, ()=>{
    console.log("server is running")
})