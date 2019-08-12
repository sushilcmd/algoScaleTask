const twitter = require('twitter');
const { configs } = require('../../config');
const client = new twitter(configs.twitterKey)

exports.getTweets = function () {
    try {
        tweet().then(res=>{
            console.log(res);
        })
    } catch (error) {
        console.log(error.message);
        throw new Error("Something happen wrong. Please try again")
    }
}

const tweet = async function () {
    client.get('statuses/mentions_timeline', function (error, tweets, response) {
        if (error) {
            throw new Error(error);
        }
        return tweets;
    });
}