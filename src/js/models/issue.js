
//import mongoose from mongoose.js
const { mongoose } = require("../../../mongoose.js");


//define Alignement Model
const issueSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: 1
    },
    status: {
        type: String,
        default: 1
    },
    author: {
        type: String,
        default: 1
    },
    description: {
        type: String,
        default: 1
    },

});

//expose Model
module.exports = mongoose.model('Issue', issueSchema);