const { chatModel } = require('../../models/index');

chatService = {};

chatService.registerChat = async (payload) => {
    return await chatModel.insertMany(payload);
};

chatService.getChats = async () => {
    return await chatModel.find({}).lean();
};

module.exports = chatService;