const board = require('../../../models/schema/board_schema');
const like = require('../../../models/schema/like_schema');
module.exports = {
    async selectMainBoard() {
        const boardAll = await board.find().populate('userId').sort('-day');
        return boardAll;
    },

    // 현재 로그인한 사용자의 좋아요 및 싫어요 상태 보여주기
    async findLikeYn(userId) {
        const likeAll = await like.find({ userId }).populate({
            path: 'boardId',
            options: { sort: { day: -1 } },
        });
        return likeAll;
    },
};
