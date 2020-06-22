let mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/cat_app');

mongoose.connect('mongodb://localhost/cat_app', { useNewUrlParser: true });

let catSchema = new mongoose.Schema({
  name: String,
  age: Number
});

let Cat = mongoose.model('Cat', catSchema);

// varName = new Cat({
//   name: 'pax',
//   age: 4
// });
//
// varName.save((err, cat)=>{
//   if (err) {
//     console.log('something went wrong!');
//   } else {
//     console.log('new data added!');
//     console.log(cat);
//   }
// });

Cat.create({
  name: 'gray',
  age: 3
}, (err, cat)=>{
  if (err) {
    console.log(err);
  } else {
    console.log("new cat added!!!!");
  }
});


Cat.find({}, (err, cats)=>{
  if (err) {
    console.log('something went wrong!!');
    console.log(err);
  } else {
    console.log('all the cats!!!');
    console.log(cats);
  }
});
