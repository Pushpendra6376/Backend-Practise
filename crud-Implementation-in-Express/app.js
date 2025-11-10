const express = require('express');

const app = express();

// Import routes
const homeRouter = require('./routes/home');
const studentRouter = require('./routes/students');
const courseRouter = require('./routes/courses');

// Use routes
app.use("/", homeRouter);
app.use("/students", studentRouter);
app.use("/courses", courseRouter);

app.use((req,res)=>{
    res.status(404).send("<h1>404-page not found</h1>")
})

app.listen(3000, ()=>{
    console.log("server is running...")
})