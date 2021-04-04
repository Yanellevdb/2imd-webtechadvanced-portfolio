const getId= (req, res) => {
    let id= req.params.id;
    res.json({
        status: "success",
        message:`GETTING message with ID ${id}`
    });
};

const post= (req, res) => {
    res.json({
        status: "success",
        message:"POSTING a new message for user Pickachu"
    });
};

const update= (req, res) => {
    let id= req.params.id;
    res.json({
        status: "success",
        message:`UPDATING a message with ID ${id}`
    });
};

const remove= (req, res) => {
    let id= req.params.id;
    res.json({
        status: "success",
        message:`DELETING a message with ID ${id}`
    });
};

const getAll= (req, res) => {
    if(req.query.user){
        let user= req.query.user;
        res.json({
            status: "success",
            message:`GETTING messages from username ${user}`
        });
        }
    else{
    res.json({
        status: "success",
        message:"GETTING messages"
    });
    }
};

module.exports.getId= getId;
module.exports.post= post;
module.exports.update= update; 
module.exports.remove= remove;
module.exports.getAll= getAll;