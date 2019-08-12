const mongoClient = require('mongoose');

let dbc;
const mongoDBUrl="mongodb+srv://test:cmdcs123@cluster0-mmink.mongodb.net/test?retryWrites=true&w=majority";

exports.dbCon = async () => {
    try {
        if (dbc) {
            console.log("Connection already established");
        }
        else {
            console.log('Connection establishing')
            mongoClient.connect(mongoDBUrl, { useNewUrlParser: true },function (err, db) {
                if (err) {
                    throw new Error(error.message);
                }
                dbC = dbc;
                console.log("Connection established");
                return db;
            })
        }
    } catch (error) {
        throw new Error("Something happen wrong M500")
    }
}