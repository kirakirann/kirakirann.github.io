const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schema setup
let userSchema = new Schema({
  email: String,
  name: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post'
    }
  ]
});

module.exports = mongoose.model('user', userSchema);
