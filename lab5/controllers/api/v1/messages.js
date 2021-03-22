const apiTodosRouter= require('../../../routes/api/v1/todos');
const express= require('express')
const router= express.Router();

(req, res) => {
    res.json({
        "status": "success",
        "message":"POSTING a new message for user Pikachu"
    })
})

(req, res) => {
    res.json({
        "status": "success",
        "message":"GETTING messages"
    })
})

(req, res) => {
    let id= req.params.id;

    res.json({
        "status": "success",
        "message":`GETTING message with ID ${id}`
    })
})

(req, res) => {
    res.json({
        "status": "success",
        "message":"POSTING a new message for user Pickachu"
    })
})

(req, res) => {
    res.json({
        "status": "success",
        "message":`UPDATING a message with ID ${id}`
    })
})

(req, res) => {
    res.json({
        "status": "success",
        "message":`DELETING a message with ID ${id}`
    })
})

(req, res) => {
    let username= req.params.username;

    res.json({
        "status": "success",
        "message":`GETTING a message for username ${username}`
    })
})

module.exports= router;