
const getAllProducts = () => {
    return "Fetching all products";
};

const getProductById = (id) => {
    return `Fetching product with ID: ${id}`;
};

const addProduct = () => {
    return "Adding a new product";
};

const updateProduct = () => {
    return "put request called.";
};

const deleteProduct = () => {
    return "delete request called.";
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
};
