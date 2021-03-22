const apiTodosRouter= require('../../../routes/api/v1/todos');
const express= require('express')
const router= express.Router();

const getId= (req, res) => {
    let id= req.params.id;
    res.json({
        "status": "success",
        "message":`GETTING message with ID ${id}`
    });
})

const post= (req, res) => {
    res.json({
        "status": "success",
        "message":"POSTING a new message for user Pickachu"
    });
})

const update= (req, res) => {
    let id= req.params.id;
    res.json({
        "status": "success",
        "message":`UPDATING a message with ID ${id}`
    });
})

const delete= (req, res) => {
    let id= req.params.id;
    res.json({
        "status": "success",
        "message":`DELETING a message with ID ${id}`
    });
})


module.exports= router;