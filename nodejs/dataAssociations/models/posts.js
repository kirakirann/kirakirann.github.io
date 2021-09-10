const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//post schema setup
let postSchema = new Schema({
  title: String,
  content: String
});

module.exports = mongoose.model('post', postSchema);
