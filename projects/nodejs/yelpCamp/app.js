const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//CONNECT MONGOOSE

mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true });
mongoose.set('useUnifiedTopology', true);

//SCHEMA SETUP

let campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

let campground = mongoose.model('campground', campgroundSchema);

//==========ROUTES===================

app.get('/', (req,res)=>{
  res.render('home');
});

app.get('/campgrounds', (req, res)=>{
  //get all campgrounds from DB
  campground.find({}, (err, campgrounds)=>{
    if (err) {
      console.log(err);
    } else {
      res.render('campgrounds', {campgrounds: campgrounds});
    }
  });
});

app.get('/campgrounds/new', (req,res)=>{
  res.render('new');
});

app.post('/campgrounds', (req,res)=>{
  //get data from form and add it to the DB
  let name = req.body.name;
  let image = req.body.image;
  let newCampground = {name: name, image: image};
  campground.create(newCampground, (err, campgrounds)=>{
    if (err){
      console.log(err);
    } else {
      //redirect to the campgrounds page
      res.redirect('/campgrounds');
    }
  });
});

app.listen(3000, ()=>{
  console.log('yelpCamp app server is running on http://www.localhost:3000/');
});
