const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workshopsSchema = new Schema({

    title:{
        type: String,
        required: true

    },
    email:{
        type: String,
        required: true
    },
    contact_no:{
        type: Number,
        required: true
    },

    review_state:{
        type: String,
        default:"Pending"
    },
    name:{
        type: String,
        required: true
    },
    filePath:{
        type: String,
        required: true
    },
    filename:{
        type: String,
        required: true
    },
})

const Workshop = mongoose.model("Workshop",workshopsSchema);

module.exports = Workshop;