const { redisConn } = require('../../helpers/redisCon');

exports.createUserSession = async function (payload) {
    try {
        const { userEmailId } = payload;
        const client = await redisConn();
        await client.hmset(userEmailId, payload)
        return true;
    } catch (error) {
        console.log(error.message);
    }
}