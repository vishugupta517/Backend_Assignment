const express = require('express');
const chatRouters = express.Router();
const {chatService} = require('../../services')
const ObjectId = require('mongodb').ObjectID;

chatRouters.post('/chats', async (req, res) => {
    try {
        req.body.data.map((data)=>{
            data._id=new ObjectId(data._id.trim())
            data.reciverName.reciver_id = new ObjectId(data.reciverName.reciver_id.trim())
        })
        //calling function to save req.body data
        await chatService.registerChat(req.body.data);

        //calling function to fetch data from mongoDB
        let chats = await chatService.getChats()
        
        return res.send({ message: 'Chat fetched successfully', chats });
    } catch (e) {
        return res.status(400).send({ error: e.message });
    }
});

module.exports = chatRouters;