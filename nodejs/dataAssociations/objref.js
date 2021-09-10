const mongoose = require('mongoose');
const Post = require('./models/posts');
const User = require('./models/users');

//connect to mongoose
mongoose.connect('mongodb://localhost/app_demo_2', { useNewUrlParser: true });


// //create a new post
// Post.create({
//   title: 'cats are cute',
//   content: 'pax and gray are a good example!'
// }, (err, post)=>{
//   if (err){
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// //create a new user
// User.create({
//   email: 'pax@me.com',
//   name: 'pax'
// }, (err, user)=>{
//   if(err){
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// //create a new post, find an user, then save post to found user
// Post.create({
//   title: 'leo is the best 2',
//   content: 'he is handsome and a great singer, and he is super soft!'
// }, (err, post)=>{
//   if (err){
//     console.log(err);
//   } else {
//     User.findOne({name: 'kira'}, (err, foundUser)=>{
//       if (err){
//         console.log(err);
//       } else {
//         foundUser.posts.push(post);
//         foundUser.save((err, data)=>{
//           if (err){
//             console.log(err);
//           } else {
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// });

// User.findOne({name: 'kira'}).populate('posts').exec((err, user)=>{
//   if (err){
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });
