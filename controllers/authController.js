const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authServices = require('../services/authService')

// Register
const register = async (req, res) => {
    try {
        const user = await authServices.register(req.body.username, req.body.email, req.body.password)
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json(err)
    }
};

// Login
const login = async (req, res) => {
    try {
        const user = await authServices.login(req.body.username)
        !user && res.status(401).json("Wrong username or password!")
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(401).json("Wrong username or password!")
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_SEC, { expiresIn: "3d" })
        const { password, ...others } = user._doc
        res.status(200).json({ ...others, accessToken })
    }
    catch (err) {
        res.status(500).json(err)
    }
};

module.exports = { register, login };