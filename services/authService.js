const User = require('../models/User')

const register = async (username, email, password) => {
    const newUser = new User({
        username: username,
        email: email,
        password: password,
    })
    try {
        const user = await newUser.save()
        return user
    } catch (err) {
        throw err
    }
}

const login = async (username) => {
    try {
        const user = await User.findOne({ username: username })
        return user
    } catch (err) {
        throw err
    }
}

module.exports = { register, login };