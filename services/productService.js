const Product = require('../models/product')

const newProduct = async (body) => {
    const newProduct = new Product(body);
    try {
        const savedProduct = await newProduct.save();
        return savedProduct;
    } catch (err) {
        throw err
    }
}

const updatedProduct = async (id, body) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                $set: body,
            },
            { new: true }
        );
        return updatedProduct;
    } catch (error) {
        throw error
    }
}

const deleteProduct = async (id) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        return "Product has been deleted...";
    } catch (error) {
        throw error
    }
}

const getProduct = async (id) => {
    try {
        const product = await Product.findById(id)
        return product;
    }
    catch (error) {
        throw error
    }
}

const getAllProduct = async (queryNew, queryCategory) => {
    try {
        let products;
        if (queryNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5);
        } else if (queryCategory) {
            products = await Product.find({
                categories: {
                    $in: [queryCategory],
                },
            });
        } else {
            products = await Product.find();
        }
        return products;
    }
    catch (error) {
        throw error
    }
}

module.exports = { newProduct, updatedProduct, deleteProduct, getProduct, getAllProduct };