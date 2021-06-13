"use strict";
const MONGOOSE = require('mongoose');
const Schema = MONGOOSE.Schema;

const chatSchema = new Schema({
    senderName: { type: String },
    reciverName: { type: Object },
    message: { type: String },
    sentAt: {type: String}
});

module.exports = MONGOOSE.model('chat', chatSchema);