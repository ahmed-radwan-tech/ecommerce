const Order = require('../models/Order');

const newOrder = async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
}

const orderUpdate = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
}

const orderDelete = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted...");
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const getUserOrder = async (req, res) => {
    try {
        const Orders = await Product.find({ userId: req.params.userId });
        res.status(200).json(Order);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const getAllOrder = async (req, res) => {
    try {
        const Order = await Order.find();
        res.status(200).json(Order);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const getMonthlyIncome = async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount"
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }
            }
        ]);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { newOrder, orderUpdate, orderDelete, getUserOrder, getAllOrder, getMonthlyIncome };