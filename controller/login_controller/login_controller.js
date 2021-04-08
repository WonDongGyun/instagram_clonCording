const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginService = require('./login_service/login_service');

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    loginService.findUser(email).then((findUser) => {
        if (!findUser) {
            return res.status(400).send({
                result: 'fail',
                messsage: '이메일을 다시 확인해주세요.',
            });
        }

        bcrypt.compare(password, findUser.password).then((match) => {
            if (!match) {
                return res.status(400).send({
                    result: 'fail',
                    messsage: '패스워드가 일치하지 않습니다.',
                });
            } else {
                const token = jwt.sign(
                    {
                        _id: findUser._id,
                        email: findUser.email,
                        nickName: findUser.nickName,
                        userName: findUser.userName,
                    },
                    'threeKey',
                    { expiresIn: 3600 },
                );

                return res.status(200).send({
                    result: 'success',
                    token: 'Bearer ' + token,
                });
            }
        });
    });
});

module.exports = router;
