const express = require('express');
const app = express();
const bookRouter = require('./routes/books')
//to integrate the routes
app.use('/books', bookRouter);


app.listen(3000, ()=>{
    console.log("server is running...")
})