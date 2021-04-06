const user = require('../../../models/schema/user_schema');

module.exports = {
    async findUser(email) {
        const findUser = await user.findOne({ email });
        return findUser;
    },

    async findUserId(userId) {
        const findUserId = await user.findOne({ userId });
        return findUserId;
    },
};
