const express = require('express')

const app = express();

app.use((req,res,next)=>{
    console.log("middleware 1 is called");
    next();
})

//for orders
app.get('/products',(req,res)=>{
    res.send("Here is the list of all products.")

})

app.post('/products',(req,res)=>{
    res.send("A new product has been added.")
})

// for users
app.get('/categories',(req,res)=>{
    res.send("Here is the list of all categories.")
})

app.post('/categories',(req,res)=>{
    res.send("A new category has been created.")
})

app.use((req,res)=>{
    res.status(404).send("<h1>404-page not found</h1>")
})

app.listen(4000,()=>{
    console.log("server is running");
})