const express = require('express');
const router = express.Router();
const mainService = require('./main_service/main_service');

router.get('/', async (req, res) => {
    // await mainService.makeUser('test3@naver.com', '동균', '원동균', '1234');
    await mainService.makeBoard(
        '606a20549b31925e848b4bf1',
        'test3',
        'tester',
        'testing',
    );
    // const userAll = await mainService.selectUser();
    const boardAll = await mainService.selectBoard();
    res.send({ boardAll });
});

module.exports = router;
