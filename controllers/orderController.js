const orderService = require('../services/orderService');

const newOrder = async (req, res) => {
    try {
        const savedOrder = await orderService.newOrder(req.body);
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
}

const orderUpdate = async (req, res) => {
    try {
        const updatedOrder = await orderService.updatedOrder(req.params.id, req.body);
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
}

const orderDelete = async (req, res) => {
    try {
        const message = await orderService.deleteOrder(req.params.id);
        res.status(200).json("Order has been deleted...");
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const getUserOrder = async (req, res) => {
    try {
        const order = await orderService.getUserOrder(req.params.userId);
        res.status(200).json(order);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const getAllOrder = async (req, res) => {
    try {
        const order = await orderService.getAllOrder();
        res.status(200).json(order);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const getMonthlyIncome = async (req, res) => {

    try {
        const income = await orderService.getMonthlyIncome();
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { newOrder, orderUpdate, orderDelete, getUserOrder, getAllOrder, getMonthlyIncome };