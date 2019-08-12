const { connection } = require('mongoose');
const userModel = connection.collection('Users');

exports.findUser = async function (userEmailId) {
    try {
        const findQuery = { userEmailId, isDeleted: false }
        const result = await userModel.findOne(findQuery);
        return result
    } catch (error) {
        throw new Error(error.message);
    }
}
