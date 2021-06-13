"use strict";

const ch = require('chalk')
const { chatRoutes } = require('../routes/index')
const path = require('path')

module.exports = async function (app) {

    //body-parser middleware
    app.use(require("body-parser").json({ limit: '50mb' }));
    app.use(require("body-parser").urlencoded({extended: true}));

    // initialize mongodb 
    await require('./db_mongo')();

    // initalize routes.
    app.use(chatRoutes)
};
