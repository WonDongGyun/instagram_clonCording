const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const router = express.Router();
const path = require('path');
const boardService = require('./board_service/board_service');
const verifyMWRouter = require('../../middleWare/verifiacation/verify_middleWare');

// amazon LoadPath 설정
const awsLoadPath = path.join(__dirname, '../../awsconfig.json');
AWS.config.loadFromPath(awsLoadPath);

// s3 객체생성
let s3 = new AWS.S3();

// multer 업로드
const uploadSingle = multer({
    storage: multerS3({
        s3: s3,
        bucket: '99instabucket',
        key: function (req, file, cb) {
            let extension = path.extname(file.originalname);
            cb(null, Date.now().toString() + extension);
        },
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read-write',
    }),
});

router.post(
    '/',
    uploadSingle.single('boardImg'),
    verifyMWRouter,
    async (req, res) => {
        try {
            const { contents } = req.body;
            const img = req.file.location;
            const userId = res.locals.userId;

            boardService.createBoard(userId, contents, img).then(() => {
                return res.status(200).send({
                    result: 'success',
                    messsage: '글이 작성되었습니다.',
                });
            });

            // var obj = {
            //     name: req.body.name,
            //     desc: req.body.desc,
            //     img: {
            //         data: fs.readFileSync(
            //             path.join(__dirname + '/uploads/' + req.file.filename),
            //         ),
            //         contentType: 'image/png',
            //     },
            // };
        } catch {
            return res.status(400).send({
                result: 'fail',
                messsage: '로그인을 해야 사용할 수 있는 기능입니다.',
            });
        }
    },
);

module.exports = router;
