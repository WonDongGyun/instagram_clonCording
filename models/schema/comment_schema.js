const mongoose = require('mongoose');

const { Schema } = mongoose;
const commentSchema = new Schema({
    comment: {
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
    boardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'board',
        required: true,
    },
    comment: {
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

module.exports = mongoose.model('comment', commentSchema);
