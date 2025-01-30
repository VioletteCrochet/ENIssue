const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const issueSchema = new Schema({
    title: String,
    author: String,
    date_created: Date,
    status: String,
    description: String,
    comments: [{ com_author: String, com_date: Date, com_message: String }],
});

const Issue = model("Issue", issueSchema);
module.exports = Issue;
