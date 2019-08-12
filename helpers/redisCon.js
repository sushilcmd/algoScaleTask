const { createClient } = require("async-redis");
let client;
const port = "6379";
const host = "192.168.1.31";

exports.redisConn = function () {
    if (!!client) {
        return new Promise((resolve, reject) => {
            resolve(client);
        });
    } else {
        const newClient = createClient(port, host);
        return new Promise((resolve, reject) => {
            newClient.on("error", function (err) {
                console.log("==> Redis Conn Error" + err);
                reject([500, "R500", false, "Something happened wrong!"]);
            });
            newClient.on("connect", function () {
                client = newClient;
                resolve(client);
            });
        });
    }
};

