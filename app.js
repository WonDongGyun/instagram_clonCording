const express = require('express');
const app = express();
const port = 3001;

// 몽고DB연결
const connect = require('./models/connectDB');
connect();

// cors 설정
const cors = require('cors');
const corsOptions = {
    origin: '*',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 라우팅 설정
const instaMainRouter = require('./controller/main_controller/main_controller');
app.use('/insta/main', instaMainRouter);

const instaLoginRouter = require('./controller/login_controller/login_controller');
app.use('/insta/login', instaLoginRouter);

const instaProfileRouter = require('./controller/profile_controller/profile_controller');
app.use('/insta/profile', instaProfileRouter);

const instaRegisterRouter = require('./controller/register_controller/register_controller');
app.use('/insta/register', instaRegisterRouter);

const instaBoardRouter = require('./controller/board_controller/board_controller');
app.use('/insta/board', instaBoardRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
