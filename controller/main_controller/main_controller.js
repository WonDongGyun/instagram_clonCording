const express = require('express');
const router = express.Router();
const mainService = require('./main_service/main_service');
const verifyRouter = require('../../middleWare/verifiacation/verify_middleWare');

router.get('/', verifyRouter, async (req, res) => {
    const { userId } = res.locals._id;
    const boardAll = await mainService.selectMainBoard();
    const likeYn = await mainService.findLikeYn(userId);
    res.send({ boardAll, likeYn });
});

module.exports = router;
