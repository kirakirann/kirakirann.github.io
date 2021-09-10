const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      mongoose   = require('mongoose'),
      campground = require('./models/campground'),
      comment    = require('./models/comment'),
      seedDB       = require('./seeds');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
seedDB();

//CONNECT MONGOOSE
mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true });
mongoose.set('useUnifiedTopology', true);

//==========ROUTES===================
app.get('/', (req,res)=>{
  res.render('home');
});

//INDEX - shows all campgrounds
app.get('/campgrounds', (req, res)=>{
  //get all campgrounds from DB
  campground.find({}, (err, campgrounds)=>{
    if (err) {
      console.log(err);
    } else {
      res.render('campgrounds/index', {campgrounds: campgrounds});
    }
  });
});

//NEW - show form to create new campground
app.get('/campgrounds/new', (req,res)=>{
  res.render('campgrounds/new');
});

//CREATE - add new campground to DB
app.post('/campgrounds', (req,res)=>{
  //get data from form and add it to the DB
  let name = req.body.name;
  let image = req.body.image;
  let description = req.body.description;
  let newCampground = {name: name, image: image, description: description};
  campground.create(newCampground, (err, camps)=>{
    if (err){
      console.log(err);
    } else {
      //redirect to the campgrounds page
      res.redirect('/campgrounds');
    }
  });
});

//SHOW - shows more info about one campground
app.get('/campgrounds/:id', (req, res)=>{
  //show the campground with provided ID
  campground.findById(req.params.id).populate('comments').exec((err, foundCampground)=>{
    if (err){
      console.log(err);
    } else {
      //render show template with that campground
      res.render('campgrounds/show', {campground: foundCampground});
    }
  });
});

//================================================
//               COMMENTS ROUTES
//================================================

//NEW ROUTE
app.get('/campgrounds/:id/comments/new', (req, res)=>{
  campground.findById(req.params.id, (err, campground)=>{
    if(err){
      console.log(err);
    } else {
      res.render('comments/new', {campground: campground});
    }
  });
});

//CREATE ROUTE
app.post('/campgrounds/:id/comments', (req, res)=>{
  //look up campground using id
  campground.findById(req.params.id, (err, campground)=>{
    if(err){
      console.log(err);
      res.redirect('/campgrounds');
    } else {
      //create new comment
      comment.create(req.body.comment, (err, comment)=>{
        if(err){
          console.log(err);
        } else {
          //connect new comment to campground by pushing new comment to comments array and save
          campground.comments.push(comment);
          campground.save();
          //redirect to campground show page
          res.redirect('/campgrounds/' + campground._id);
        }
      });
    }
  });
});

//CONNECT TO LOCAL SERVER
app.listen(3000, ()=>{
  console.log('yelpCamp app server is running on http://www.localhost:3000/');
});
