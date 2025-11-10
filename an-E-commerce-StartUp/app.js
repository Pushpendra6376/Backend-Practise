const express = require('express')

const app = express();

const cartRouter = require('./routes/cart')
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

app.use('/user', userRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);

app.listen(3000, ()=>{
    console.log("server is running...")
})