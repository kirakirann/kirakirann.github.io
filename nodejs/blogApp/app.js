const bodyParser = require('body-parser'),
      mongoose   = require('mongoose'),
      express    = require('express'),
      app        = express();

//SET UP
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//CONNECT TO MONGOOSE
mongoose.connect('mongodb://localhost:27017/blog_app', { useNewUrlParser: true });

//SCHEMA SET UP
 let blogSchema  = new mongoose.Schema({
   title: String,
   image: String,
   body: String,
   created: {type: Date, default: Date.now}
 });

 let Blog = mongoose.model('Blog', blogSchema);

 // //CREATE DATA
 // Blog.create({
 //   title: 'new blog',
 //   image: 'https://66.media.tumblr.com/2afb0adea6c987aba3c2a528d439340e/be62e75a68b05e0a-26/s1280x1920/1f58201147abb9b4fa7668cde626f1155c218039.jpg',
 //   body: 'super cute pandas'
 // });

//ROUTES
app.get('/', (req, res)=>{
  res.redirect('/blogs');
});

//INDEX ROUTES
app.get('/blogs', (req, res)=>{
  Blog.find({}, (err, blogs)=>{
    if (err){
      console.log(err);
    } else {
      res.render('index', {blogs: blogs});
    }
  });
});

//NEW ROUTE
app.get('/blogs/new', (req, res)=>{
  res.render('new');
});

//CONNECT TO LOCAL SERVER
app.listen(3000, ()=>{
  console.log('server is running!');
});
