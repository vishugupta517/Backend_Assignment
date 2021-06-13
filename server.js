require('dotenv').config();
const EXPRESS = require("express");
const ch = require('chalk')
const app = EXPRESS();

const port = process.env.PORT || 4000

const server = require('http').Server(app);

/** Server is running here */
let startNodeserver = async () => {
    await require('./app/startup/expressStartup')(app);

    return new Promise((resolve, reject) => {
        server.listen(port, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};


startNodeserver()
    .then(() => {
        console.log(ch.green.bold(`Node server running on ${port}`));
    }).catch((err) => {
        console.log(ch.red.bold(`Error in starting server ${err}`));
        process.exit(1)
    });