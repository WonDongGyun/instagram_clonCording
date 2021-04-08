const express = require('express');
const router = express.Router();
const registerService = require('./register_service/register_service');

// 회원가입
router.post('/', async (req, res) => {
    // 이메일 및 비밀번호 정규식
    const email_regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const password_regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,12}$/;
    const { email, nickName, userName, password, passwordChk } = req.body;

    if (
        email == '' ||
        nickName == '' ||
        userName == '' ||
        password == '' ||
        passwordChk == ''
    ) {
        return res.status(400).send({
            result: 'fail',
            messsage: '빈 항목을 입력해주세요.',
        });
    }

    if (!email_regExp.test(email)) {
        return res.status(400).send({
            result: 'fail',
            messsage: '이메일 형식이 틀렸습니다.',
        });
    }

    if (password != passwordChk) {
        return res.status(400).send({
            result: 'fail',
            messsage: '비밀번호를 다시 확인해주세요.',
        });
    }

    if (!password_regExp.test(password)) {
        return res.status(400).send({
            result: 'fail',
            messsage: '비밀번호 형식이 틀렸습니다.',
        });
    }

    registerService.findUser(email).then(async (findUser) => {
        if (findUser) {
            return res.status(400).send({
                result: 'fail',
                messsage: '이미 존재하는 이메일입니다.',
            });
        } else {
            await registerService.createUser(
                email,
                nickName,
                userName,
                password,
            );
            return res.status(200).send({
                result: 'success',
                messsage: '회원가입이 완료되었습니다. 로그인을 해주세요.',
            });
        }
    });
});

module.exports = router;
