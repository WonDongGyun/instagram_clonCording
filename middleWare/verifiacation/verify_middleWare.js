const jwt = require('jsonwebtoken');
const user = require('../../models/schema/user_schema');

// jwt 인증 미들웨어
module.exports = (req, res, next) => {
    try {
        let authorization = req.get('authorization');
        const [tokenType, tokenValue] = authorization.split(' ');

        if (tokenType != 'Bearer') {
            return res.status(400).send({
                result: 'fail',
                message: '잘못된 접근입니다.',
            });
        }

        const { _id, email, nickName, userName } = jwt.verify(
            tokenValue,
            'threeKey',
        );

        user.findOne({ _id }).then((findUserId) => {
            res.locals._id = findUserId._id;
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
