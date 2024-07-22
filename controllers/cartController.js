const Cart = require('../models/product')

const cartCreat = async (req, res) => {

    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
}

const cartUpdate = async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
}

const cartDelete = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...");
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const getUserCart = async (req, res) => {
    try {
        const Cart = await Product.find({ userId: req.params.userId });
        res.status(200).json(Cart);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const getAllCart = async (req, res) => {
    try {
        const Cart = await Cart.find();
        res.status(200).json(Cart);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { cartCreat, cartUpdate, cartDelete, getUserCart, getAllCart };
