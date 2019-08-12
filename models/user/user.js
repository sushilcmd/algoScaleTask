const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userUid: mongoose.Types.ObjectId,
    userEmailId: String,
    userName: String,
    userPassword: String,
    createdAt: Number,
    updatedAt: Number,
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

exports.userModel = mongoose.model('User', userSchema, 'Users');