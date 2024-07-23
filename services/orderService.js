const Order = require('../models/Order');


const newOrder = async (body) => {
    const newOrder = new Order(body);
    try {
        const savedOrder = await newOrder.save();
        return savedOrder;
    } catch (err) {
        throw err
    }
}

const updatedOrder = async (id, body) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(id, { $set: body, }, { new: true });
        return updatedOrder;
    }
    catch (err) {
        throw err
    }
}

const deleteOrder = async (id) => {
    try {
        await Order.findByIdAndDelete(id);
        return "Order has been deleted...";
    }
    catch (err) {
        throw err
    }
}

const getUserOrder = async (userId) => {
    try {
        const order = await Product.find({ userId });
        return order;
    }
    catch (err) {
        throw err
    }
}

const getAllOrder = async () => {
    try {
        const order = await Order.find();
        return order;
    }
    catch (err) {
        throw err
    }
}

const getMonthlyIncome = async () => {
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
        return income;
    } catch (err) {
        throw err
    }
}

module.exports = { newOrder, updatedOrder, deleteOrder, getUserOrder, getAllOrder, getMonthlyIncome };