const { findUser } = require('./userHelper');
const {createUserSession}=require('./createSession');


/**
 * match user password
 */
const match = function (str1, str2) {
    return str1 == str2 ? true : false
}

/**
 * login user
 * @param {*} payload 
 */
exports.login = async function (payload) {
    const { userEmailId, userPassword } = payload;
    const user = await findUser(userEmailId);

    if (!user) {
        throw new Error("Invalid EmailId");
    }

    const matchPassword = match(userPassword, user["userPassword"]);
    if (!matchPassword) {
        throw new Error("Invalid Password")
    }
    await createUserSession(user);
    return user;
}
