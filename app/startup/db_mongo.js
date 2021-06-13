const mongoose = require('mongoose');
const ch = require('chalk')

module.exports = async () => {
    const options = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    };
    await mongoose.connect(process.env.MONGODB_URL, options);
    console.log(ch.green.bold(`Mongo connected at ${process.env.MONGODB_URL}`));
};