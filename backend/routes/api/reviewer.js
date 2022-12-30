const express = require('express');
const reviewerRoutes = express.Router();
const bcrytpt = require('bcryptjs')

let Research = require('../../models/researcher');
let Workshop = require('../../models/workshop');



reviewerRoutes.route('/Workshop').get(function (req, res){

    Workshop.find(function (err,event){
        if(err)
            console.log(err);
        else{
            res.json(event);
        }
    });
});

reviewerRoutes.route('/Research').get(function (req, res){

    Research.find(function (err,event){
        if(err)
            console.log(err);
        else{
            res.json(event);
        }
    });
});

reviewerRoutes.route('/approvework/:id').post(function (req,res){

    let id = req.params.id;
    Workshop.findById(id, function (err, Event){
        if(!Event)
            res.status(404).send("Data is not found??");
        else{
            Event.review_state = "Approved";

            Event.save().then(employee => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

reviewerRoutes.route('/rejectwork/:id').post(function (req,res){

    let id = req.params.id;
    Workshop.findById(id, function (err, Event){
        if(!Event)
            res.status(404).send("Data is not found??");
        else{
            Event.review_state = "Reject";

            Event.save().then(employee => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});


reviewerRoutes.route('/approveresearch/:id').post(function (req,res){

    let id = req.params.id;
    Research.findById(id, function (err, Event){
        if(!Event)
            res.status(404).send("Data is not found??");
        else{
            Event.review_state = "Approved";

            Event.save().then(employee => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

reviewerRoutes.route('/rejectresearch/:id').post(function (req,res){

    let id = req.params.id;
    Research.findById(id, function (err, Event){
        if(!Event)
            res.status(404).send("Data is not found??");
        else{
            Event.review_state = "Reject";

            Event.save().then(employee => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

module.exports = reviewerRoutes;