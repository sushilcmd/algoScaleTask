const router=require('express').Router();;
const {getTweets}=require('../../controller/twitter/tweets');

router.get('/tweets',getTweets);

module.exports=router;