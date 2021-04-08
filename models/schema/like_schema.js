const mongoose = require('mongoose');

const { Schema } = mongoose;
const likeSchema = new Schema({
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
});

module.exports = mongoose.model('like', likeSchema);
