const getProducts = (req,res) =>{
    res.send("Fetching all products")
};

const getProductsById = (req,res)=>{
    res.send(`Fetching product with ID: ${req.params.id}`);
}

const postProduct = (req,res)=>{
    res.send("Adding a new product");
};

const putProduct = (req,res)=>{
    res.send("put request called.");
}

const deleteProductById = (req,res)=>{
    res.send("delete request called.");
}
module.exports = {
    getProducts,
    getProductsById,
    postProduct,
    putProduct,
    deleteProductById
}