const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

UserSchema.pre('save', async function (next) {
    const saltRounds = parseInt(process.env.HASH_SALT_ROUNDS, 10);
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
});

module.exports = mongoose.model('User', UserSchema);
