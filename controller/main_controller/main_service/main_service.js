const board = require('../../../models/schema/board_schema');
const like = require('../../../models/schema/like_schema');
module.exports = {
    async selectMainBoard() {
        const boardAll = await board.find().populate('userId').sort('-day');
        return boardAll;
    },

    async findLikeYn(userId) {
        const likeAll = await like.find({ userId }).populate({
            path: 'boardId',
            options: { sort: { day: -1 } },
        });
        return likeAll;
    },
};
