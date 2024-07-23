const bcrypt = require("bcrypt");
const userServices = require("../services/userService");

const updateUser = async (req, res) => {
    if (req.body.password) {
        req.body.password = bcrypt.hash(req.body.password, process.env.HASH_SALT_ROUNDS);
    }
    try {
        const updatedUser = await userServices.updated(req.params.id, req.body);
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteUser = async (req, res) => {
    try {
        const meesage = await userServices.deleted(req.params.id);
        res.status(200).json(meesage);
    } catch (err) {
        res.status(500).json(err);
    }
};

const findUser = async (req, res) => {
    try {
        const user = await userServices.finded(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getAllUsers = async (req, res) => {
    const query = req.query.new;
    try {
        const users = await userServices.getAll(query);
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getUserStats = async (req, res) => {

    try {
        const data = await userServices.status();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { updateUser, deleteUser, findUser, getAllUsers, getUserStats };
