const express = require('express');
const adminRoutes = express.Router();
const bcrytpt = require('bcryptjs')

let Employee = require('../../models/employee.model');
let Conference = require('../../models/Event');


adminRoutes.route('/add').post(function (req,res){
    console.log("Pass");
    let employee = new Employee(req.body);
    employee.save()
        .then(employee => {
            res.status(200).json({'employee' : 'employee is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

adminRoutes.route('/').get(function (req, res){

    Employee.find(function (err,employee){
        if(err)
            console.log(err);
        else{
            res.json(employee);
        }
    });
});

adminRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Employee.findById(id, function (err,employee){
        res.json(employee);
    });
});

adminRoutes.route('/update/:id').post(function (req,res){
    let id = req.params.id;
    Employee.findById(id, function (err, employee){
        if(!employee)
            res.status(404).send("Data is not found??");
        else{
            //employee.oid = req.body.oid;
            employee.name = req.body.name;
            //employee.address = req.body.address;
            //employee.nic = req.body.nic;
            //employee.phone = req.body.phone;
            //employee.customer_type = req.body.customer_type;
            employee.email = req.body.email;
            employee.password = req.body.password;
            employee.cpassword = req.body.cpassword;


            employee.save().then(employee => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

adminRoutes.route('/delete/:id').get(function(req,res){
    Employee.findByIdAndRemove({_id:req.params.id}, function (err, employee){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

adminRoutes.route('/conference').get(function (req, res){

    Conference.find(function (err,event){
        if(err)
            console.log(err);
        else{
            res.json(event);
        }
    });
});

adminRoutes.route('/approve/:id').post(function (req,res){

    let id = req.params.id;
    Conference.findById(id, function (err, Event){
        if(!Event)
            res.status(404).send("Data is not found??");
        else{
            Event.status = "Approved";

            Event.save().then(employee => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

adminRoutes.route('/reject/:id').post(function (req,res){

    let id = req.params.id;
    Conference.findById(id, function (err, Event){
        if(!Event)
            res.status(404).send("Data is not found??");
        else{
            Event.status = "Reject";

            Event.save().then(employee => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

module.exports = adminRoutes;