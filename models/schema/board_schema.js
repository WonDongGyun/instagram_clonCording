const mongoose = require('mongoose');

const { Schema } = mongoose;
const boardSchema = new Schema({
    boardId: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        index: true,
        auto: true,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    contents: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    like: {
        type: Number,
        default: 0,
    },
    day: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

module.exports = mongoose.model('board', boardSchema);
