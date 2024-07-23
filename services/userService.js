const User = require('../models/User');

const updated = async (id, body) => {
    try {
        const updated = await User.findByIdAndUpdate(id, { $set: body }, { new: true });
        return updated;
    } catch (error) {
        throw err
    }
}

const deleted = async (id) => {
    try {
        await User.findByIdAndDelete(id)
        return "User has been deleted..."
    } catch (error) {
        throw err
    }
}

const finded = async (id) => {
    try {
        const finded = await User.findById(id);
        return finded;
    } catch (error) {
        throw err
    }
}

const getAll = async (query) => {
    try {
        const getAll = query
            ? await User.find().sort({ _id: -1 }).limit(5)
            : await User.find();
        return getAll;
    } catch (error) {
        throw err

    }
}

const status = async () => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        return data;
    } catch (error) {
        throw err
    }
}

module.exports = { updated, deleted, finded, getAll, status };