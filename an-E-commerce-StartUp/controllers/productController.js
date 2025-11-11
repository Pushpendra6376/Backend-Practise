const productService = require('../services/productService');

const getProducts = (req, res) => {
    const result = productService.getAllProducts();
    res.send(result);
};

const getProductsById = (req, res) => {
    const result = productService.getProductById(req.params.id);
    res.send(result);
};

const postProduct = (req, res) => {
    const result = productService.addProduct();
    res.send(result);
};

const putProduct = (req, res) => {
    const result = productService.updateProduct();
    res.send(result);
};

const deleteProductById = (req, res) => {
    const result = productService.deleteProduct();
    res.send(result);
};

module.exports = {
    getProducts,
    getProductsById,
    postProduct,
    putProduct,
    deleteProductById
};
