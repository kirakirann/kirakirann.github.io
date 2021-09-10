const bodyParser      = require('body-parser'),
      methodOverride  = require('method-override'),
      mongoose        = require('mongoose'),
      expressSanitizer = require('express-sanitizer'),
      express         = require('express'),
      app             = express();

//CONNECT MONGOOSE
mongoose.connect('mongodb://localhost:27017/restful_blog', { useNewUrlParser: true });
mongoose.set('useUnifiedTopology', true);

//SET UP
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride('_method'));

//SET UP SCHEMA
//Mongoose configuration model
let blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  create: {type: Date, default: Date.now}
});

let Blog = mongoose.model('Blog', blogSchema);

//RESTFUL ROUTES
//INDEX ROUTE
app.get('/blogs', (req, res)=>{
  Blog.find({}, (err, blogs)=>{
    if (err){
      console.log(err);
    } else {
      res.render('index', {blogs: blogs});
    }
  });
});

app.get('/', (req, res)=>{
  res.redirect('/blogs');
});

//NEW ROUTE - shows form to add new blog post
app.get('/blogs/new', (req,res)=>{
  res.render('new');
});

//CREATE ROUTE - create new blog, then redirect
app.post('/blogs', (req, res)=>{
  //sanitize
  req.body.blog.body = req.sanitize(req.body.blog.body);
  //create blog post
  Blog.create(req.body.blog, (err, newBlog)=>{
    if (err){
      //redirect to form page
      res.redirect('/blogs/new');
    } else {
      //redirect to index route
      res.redirect('/blogs');
    }
  });
});

//SHOW ROUTE - shows more info about a post
app.get('/blogs/:id', (req, res)=>{
  Blog.findById(req.params.id, (err, foundBlog)=>{
    if (err){
      res.redirect('/blogs');
      console.log(err);
    } else {
      res.render('show', {blog: foundBlog});
    }
  });
});

//EDIT ROUTE
app.get('/blogs/:id/edit', (req, res)=>{
  Blog.findById(req.params.id, (err, foundBlog)=>{
    if(err){
      res.render('/blogs')
    } else {
      res.render('edit', {blog: foundBlog});
    }
  });
});

//UPDATE ROUTE
app.put('/blogs/:id', (req, res)=>{
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog)=>{
    if(err){
      res.redirect('/blogs');
    } else {
      res.redirect('/blogs/' + req.params.id);
    }
  });
});

//DELETE ROUTE
app.delete('/blogs/:id', (req, res)=>{
  Blog.findByIdAndRemove(req.params.id, req.body.blog, (err)=>{
    if(err){
      res.redirect('/blogs');
    } else {
      res.redirect('/blogs');
    }
  });
});

//CONNECT TO LOCAL SERVER
app.listen(3000, ()=>{
  console.log('server is running!');
});
