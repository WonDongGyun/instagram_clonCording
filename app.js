const express = require('express');
const app = express();
const port = 3001;

// 몽고DB연결
const connect = require('./models/connectDB');
connect();

// ors 설정
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
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

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
