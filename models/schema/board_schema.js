const mongoose = require('mongoose');

const { Schema } = mongoose;
const boardSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    contents: {
        type: String,
        required: true,
    },
    day: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('board', boardSchema);
