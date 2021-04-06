const jwt = require('jsonwebtoken');
const user = require('../../models/schema/user_schema');

module.exports = (req, res, next) => {
    try {
        const { authorization } = req.body;
        const { tokenType, tokenValue } = authorization.split(' ');

        if (tokenType != 'Bearer') {
            return res.status(400).send({
                result: 'fail',
                message: '잘못된 접근입니다.',
            });
        }

        const { userId, email, nickName, userName } = jwt.verify(
            tokenValue,
            'threeKey',
        );

        user.findOne({ userId }).then((findUserId) => {
            res.locals.userId = findUserId.userId;
            res.locals.email = findUserId.email;
            res.locals.nickName = findUserId.nickName;
            res.locals.userName = findUserId.userName;
            next();
        });
    } catch {
        return res.status(400).send({
            result: 'fail',
            message: '로그인을 해주세요.',
        });
    }
};
