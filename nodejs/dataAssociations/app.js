const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect to mongoose
mongoose.connect('mongodb://localhost/app_demo', { useNewUrlParser: true });

//post schema setup
let postSchema = new Schema({
  title: String,
  content: String
});

let Post = mongoose.model('post', postSchema);

//user schema setup
let userSchema = new Schema({
  email: String,
  name: String,
  posts: [postSchema]
});

let User = mongoose.model('user', userSchema);

//create new user
// User.create({
//   email: 'msgray@meow.com',
//   name: 'gray',
//   posts: [
//     {title: 'female cats are the best', content: 'we are more adorable and cute'}
//   ]
// });

//create new post
// Post.create({
//   title: 'new post',
//   content: 'all cats are cute'
// });

//find user and push a new post then save
User.findOne({name: 'gray'}, (err, user)=>{
  if(err){
    console.log(err);
  } else {
    user.posts.push({title: 'new post again', content: 'female cats are still better!'});
  }
  user.save((err, user)=>{
    if(err){
      console.log(err);
    } else {
      console.log(user);
    }
  });
});
