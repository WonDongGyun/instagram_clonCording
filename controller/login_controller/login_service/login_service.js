const user = require('../../../models/schema/user_schema');

module.exports = {
    async findUser(email) {
        const findUser = await user.findOne({ email });
        return findUser;
    },
};
