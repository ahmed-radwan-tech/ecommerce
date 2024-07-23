const productService = require('../services/productService');

const newProduct = async (req, res) => {

    try {
        const savedProduct = await productService.newProduct(req.body);
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
};


const updatedProduct = async (req, res) => {
    try {
        const updatedProduct = await productService.updatedProduct(req.params.id, req.body);
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const messeage = await productService.deleteProduct(req.params.id);
        res.status(200).json("Product has been deleted...");
    }
    catch (err) {
        res.status(500).json(err);
    }
};

const getProduct = async (req, res) => {
    try {
        const product = await productService.getProduct(req.params.id);
        res.status(200).json(product);
    }
    catch (err) {
        res.status(500).json(err);
    }
};

const getAllProduct = async (req, res) => {
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    try {
        const products = await productService.getAllProduct(queryNew, queryCategory);
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { newProduct, updatedProduct, deleteProduct, getProduct, getAllProduct };