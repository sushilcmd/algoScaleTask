const { userModel } = require('../../models/user/user');
const { findUser } = require('./userHelper');
const mongoose = require('mongoose');

const createUserMeta = function (payload) {
    return {
        ...payload,
        userUid: mongoose.Types.ObjectId()
    }
}


const createEntry =async function (payload) {
    try {
        await userModel.create(createUserMeta(payload));
        return true;
    } catch (error) {
        throw new Error(error.message);
    }
}

exports.register =async function (payload) {
    const { userEmailId } = payload;;
    const user =await findUser(userEmailId);;
    if (user) {
        throw new Error("User already Exist");
    }
    await createEntry(payload);
    return true;
}