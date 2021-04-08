const board = require('../../../models/schema/board_schema');
const user = require('../../../models/schema/user_schema');
const like = require('../../../models/schema/like_schema');

module.exports = {
    async createBoard(userId, contents, img) {
        user.findOne({ _id: userId }).then(async (findUser) => {
            const userId = findUser._id;
            await board.create({ userId, contents, img });
        });
    },

    // 좋아요 및 싫어요 기능. $inc를 사용하면 몽고DB에서 간단한 +- 연산이 가능하다.
    async likeBoard(userId, boardId) {
        return like.findOne({ userId, boardId }).then(async (findLike) => {
            if (findLike) {
                await like.deleteOne({ userId, boardId });
                await board.updateOne(
                    {
                        _id: boardId,
                    },
                    { $inc: { like: -1 } },
                );
                return 'unLike';
            } else {
                await like.create({ userId, boardId });
                await board.updateOne(
                    {
                        _id: boardId,
                    },
                    { $inc: { like: 1 } },
                );
                return 'like';
            }
        });
    },
};
