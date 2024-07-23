const cartService = require('../services/cartService');

const cartCreate = async (req, res) => {
    try {
        const savedCart = await cartService.createCart(req.body);
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
};

const cartUpdate = async (req, res) => {
    try {
        const updatedCart = await cartService.updateCart(req.params.id, req.body);
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
};

const cartDelete = async (req, res) => {
    try {
        const message = await cartService.deleteCart(req.params.id);
        res.status(200).json(message);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getUserCart = async (req, res) => {
    try {
        const cart = await cartService.getUserCart(req.params.userId);
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getAllCarts = async (req, res) => {
    try {
        const carts = await cartService.getAllCarts();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { cartCreate, cartUpdate, cartDelete, getUserCart, getAllCarts };
