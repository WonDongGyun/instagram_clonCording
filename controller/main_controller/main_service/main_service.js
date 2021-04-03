const board = require('../../../models/schema/board_schema');

module.exports = {
    async makeBoard(title, name, contents) {
        day = new Date();
        await board.create({ title, name, contents, day });
    },

    async selectBoard() {
        const boardAll = await board.find();
        return boardAll;
    },
};
