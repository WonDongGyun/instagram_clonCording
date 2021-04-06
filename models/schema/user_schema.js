const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;
const userSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        index: true,
        auto: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    nickName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profile_img: {
        type: String,
    },
    day: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

/* bcrypt를 사용한 패스워드 암호화 */
userSchema.pre('save', function (next) {
    const user = this;
    const saltFactor = 10;
    bcrypt.genSalt(saltFactor, (err, salt) => {
        // Salt 생성
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, (err, hash) => {
            // Hash생성
            if (err) {
                return next(err);
            }
            user.password = hash; // Hash값 pwd에 저장
            next();
        });
    });
});

module.exports = mongoose.model('user', userSchema);
