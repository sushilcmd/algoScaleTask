const { getTweets } = require('../../services/twitter/getRecentTweets');

exports.getTweets = function (req, res) {
    const result = getTweets();
    res.json({
        meta: "user tweets", status: true,
        data: result
    })
}