const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);

// const helmet=require('helmet');
// const morgan=require('morgan');

const authRoute = require('./routes/auth/auth');
const twitterRoutes=require('./routes/twitter/tweets');

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var port = process.env.PORT || 5024;

const { dbCon } = require('./helpers/dbCon');

dbCon().then(_ => console.log)

app.use('/auth', authRoute);
app.use('/twitter',twitterRoutes);

http.listen(port, function () {
    console.log(`listening on ${port}`);
});