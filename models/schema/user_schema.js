const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        index: true,
        auto: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    nickName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    day: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

module.exports = mongoose.model('user', userSchema);
