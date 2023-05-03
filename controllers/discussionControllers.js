const { compareSync } = require("bcrypt");
const Discussion   = require("../models/Discussion.js");


const getalldiscussion =async (req, res) => {

    const all_discussion = await Discussion.find({});
    res.status(200).json({
        "status": "success",
        "data": all_discussion
    })
   
}

const creatediscussion = async (req, res) => {

    Discussion.create(req.body).then((discussion)=> {
        res.status(200).json({
            "message": 'Discussion added successfully',
            "discussion_id": discussion._id,
            "status": 'success'
        });
    }).catch((err) => {
        res.status(404).json({
            "status": 'fail',
            "message": err.message
        });
    });
}

const deletediscussion = async (req, res) => {

    const id = req.params.id;

    const discussion = await Discussion.findById(id);
    if(!discussion)
    {
        res.status(403).json({
            "status": 'fail',
            "message": "Given Discussion doesnot exist"
        })
    }

    Discussion.findByIdAndDelete(id).then(() => {
        res.status(200).json({
            status: 'success',
            message: 'Discussion deleted successfully'
        });
    })
    .catch((err) => {
        res.status(404).json({
            "status": 'fail',
            "message": err.message
        })
    });

}

const updatediscussion = async (req, res) => {

    const id = req.params.id;
    console.log(id);

    const discussion = await Discussion.findById(id);
    console.log(discussion);
    if(!discussion)
    {
        res.status(403).json({
            "status": 'fail',
            "message": "Given Discussion doesnot exist"
        })
    }

    Discussion.findByIdAndUpdate(id, req.body).then(() => {
        res.status(200).json({
            status: 'success',
            message: 'Discussion updated successfully'
        });
    })
    .catch((err) => {
        res.status(404).json({
            "status": 'fail',
            "message": err.message
        })
    });

}

/*

getdiscussion Controller


1. get the discussion with given id in req.params.

Response --> 

1. Success

200 Status code
json = {
  status: 'success',
  data: {
    heading : xyz,
    body : xyz,
    creator_id : xyz
  }
}

2. Discussion Doesnot exist

403 Status Code
json = {
    "status": 'fail',
    "message": 'Given Discussion doesnot exist'
}

*/

const getdiscussion = async (req, res) => {

    //Write your code here.

}

module.exports = { getalldiscussion, getdiscussion, creatediscussion, deletediscussion, updatediscussion };
