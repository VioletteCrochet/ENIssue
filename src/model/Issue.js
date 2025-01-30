const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const issueSchema = new Schema({
  id: String, 
  title: String, 
  author: String, 
  date_created: Date, 
  status: String, 
  description: String, 
});

const Issue = model('Issue', issueSchema);
module.exports = Issue;
