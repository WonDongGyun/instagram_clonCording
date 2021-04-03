const express = require('express');
const router = express.Router();
const mainService = require('./main_service/main_service');

router.get('/', async (req, res) => {
    //  await mainService.makeBoard('test3', 'tester', 'testing');
    const boardAll = await mainService.selectBoard();
    res.send({ boardAll });
});

module.exports = router;
