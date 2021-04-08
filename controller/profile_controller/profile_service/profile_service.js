const user = require('../../../models/schema/user_schema');
const board = require('../../../models/schema/board_schema');

module.exports = {
    async selectProfile(userId) {
        const boardAll = await board
            .find({
                userId: userId,
            })
            .sort('-day');

        return boardAll;
    },
};
