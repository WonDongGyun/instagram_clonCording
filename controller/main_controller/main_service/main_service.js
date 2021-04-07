const user = require('../../../models/schema/user_schema');
const board = require('../../../models/schema/board_schema');

module.exports = {
    async selectBoard() {
        const boardAll = await board.find();
        return boardAll;
    },
};
