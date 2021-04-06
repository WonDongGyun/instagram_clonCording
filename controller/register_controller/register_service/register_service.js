const user = require('../../../models/schema/user_schema');

module.exports = {
    async createUser(email, nickName, userName, password) {
        await user.create({ email, nickName, userName, password });
    },

    async findUser(email) {
        const findUser = await user.findOne({ email });
        return findUser;
    },
};
