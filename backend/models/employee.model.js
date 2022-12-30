const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Employee = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    cpassword: {
        type: String
    }
}, {
    collation: 'employee'
});

module.exports = mongoose.model('Employee',Employee);