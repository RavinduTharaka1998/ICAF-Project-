const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const researchSchema = new Schema({

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

const Research = mongoose.model("researcher",researchSchema);

module.exports = Research;