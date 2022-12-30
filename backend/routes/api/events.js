const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateEventInput = require("../../validation/eventvaidate");
//const validateLoginInput = require("../../validation/login");

// Load User model
const Event = require("../../models/Event");

//Event insert
router.post("/insert", (req, res) => {
  // Form validation
  const { errors, isValid } = validateEventInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Event.findOne({ ename: req.body.ename}).then(user => {
    if (user) {
      return res.status(400).json({ ename: "Event already exists" });
    } else {
      const newEvent = new Event({
        ename: req.body.ename,
        edue: req.body.edue,
        edes: req.body.edes,
        link:req.body.link
      });

      if(req.body){
        const event = new Event(req.body);
        event.save().then(data => {
            res.status(200).send({data:data});
        })
            .catch(error=>{
                res.status(500).send({ error: error.message});
            });
      }

    }
  });
});


//Get all Events

router.route('/all').get(function (req, res){

  Event.find(function (err,event){
      if(err)
          console.log(err);
      else{
          res.json(event);
      }
  });
});

//Get approved Events

router.route('/approved').get(function (req, res){

  Event.find({status: 'Approved'}, function (err,event){
 
      if(err)
          console.log(err);
      else{
          res.json(event);
      }
   
  });
  
});

//Delete Event

router.route('/delete/:id').get(function(req,res) {
  Event.findByIdAndRemove({_id:req.params.id},function(err,event){
      if (err) res.json(err);
      else res.json('Successfully removed');
  });
});



router.route('/edit/:id').get(function (req,res){
  let id = req.params.id;
  Event.findById(id, function (err,event){
      res.json(event);
  });
});

router.route('/update/:id').post(function (req,res){
  let id = req.params.id;
  
  Event.findById(id, function (err, event){
      if(!event)
          res.status(404).send("Data is not found??");
      else{
      
          event.oid = req.body.oid;
          event.ename = req.body.ename;
          event.edue = req.body.edue;
          event.edes = req.body.edes;
          event.link = req.body.link;
          event.date = req.body.date;
          event.status = req.body.status;
         
          event.save().then(event => {
              res.json('Update Complete');
          })
              .catch(err =>{
                  console.log(err);
                  res.status(400).send("Unable to update data");
              });
      }
  });
});


module.exports = router;
