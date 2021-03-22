const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        "status": "success",
        "message":"POSTING a new message for user Pikachu"
    })
})

router.get("/api/v1/messages", (req, res) => {
    res.json({
        "status": "success",
        "message":"GETTING messages"
    })
})

router.get("/api/v1/messages/:id", (req, res) => {
    let id= req.params.id;

    res.json({
        "status": "success",
        "message":`GETTING message with ID ${id}`
    })
})

router.post("/api/v1/messages/", (req, res) => {
    res.json({
        "status": "success",
        "message":"POSTING a new message for user Pickachu"
    })
})

router.put("/api/v1/messages/:id", (req, res) => {
    res.json({
        "status": "success",
        "message":`UPDATING a message with ID ${id}`
    })
})

router.delete("/api/v1/messages/:id", (req, res) => {
    res.json({
        "status": "success",
        "message":`DELETING a message with ID ${id}`
    })
})

router.get("/api/v1/messages?user=username", (req, res) => {
    let username= req.params.username;

    res.json({
        "status": "success",
        "message":`GETTING a message for username ${username}`
    })
})