const user = require('../../../models/schema/user_schema');
const board = require('../../../models/schema/board_schema');

module.exports = {
    async makeUser(email, nickName, userName, password) {
        day = new Date();
        await user.create({ email, nickName, userName, password });
    },

    async selectUser() {
        const userAll = await user.find();
        return userAll;
    },

    async makeBoard(userId, contents, img, tag) {
        day = new Date();
        await board.create({ userId, contents, img, tag });
    },

    async selectBoard() {
        const boardAll = await board.find();
        return boardAll;
    },
};
