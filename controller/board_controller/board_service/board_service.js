const board = require('../../../models/schema/board_schema');

module.exports = {
    async createBoard(userId, contents, img) {
        await board.create({ userId, contents, img });
    },
};
