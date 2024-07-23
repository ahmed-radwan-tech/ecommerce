const Cart = require('../models/Cart');

const createCart = async (data) => {
    const newCart = new Cart(data);
    try {
        return await newCart.save();
    } catch (err) {
        throw err;
    }
};

const updateCart = async (id, data) => {
    try {
        return await Cart.findByIdAndUpdate(
            id,
            { $set: data },
            { new: true }
        );
    } catch (err) {
        throw err;
    }
};

const deleteCart = async (id) => {
    try {
        await Cart.findByIdAndDelete(id);
        return "Cart has been deleted...";
    } catch (err) {
        throw err;
    }
};

const getUserCart = async (userId) => {
    try {
        return await Cart.find({ userId });
    } catch (err) {
        throw err;
    }
};

const getAllCarts = async () => {
    try {
        return await Cart.find();
    } catch (err) {
        throw err;
    }
};

module.exports = { createCart, updateCart, deleteCart, getUserCart, getAllCarts };
