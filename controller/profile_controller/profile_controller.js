const express = require('express');
const router = express.Router();
const profileservice = require('./profile_service/profile_service');
const verifyRouter = require('../../middleWare/verifiacation/verify_middleWare');

router.get('/', verifyRouter, async (req, res) => {
    const userId = res.locals._id;
    const boardAll = await profileservice.selectProfile(userId);
    res.send({
        userId: res.locals._id,
        nickName: res.locals.nickName,
        userName: res.locals.userName,
        boardAll,
    });
});

module.exports = router;

//갖고온 자료를 사용
