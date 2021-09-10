const bodyParser            = require('body-parser'),
      mongoose              = require('mongoose'),
      passport              = require('passport'),
      localStrategy         = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose'),
      express               = require('express'),
      user                  = require('./models/user'),
      app                   = express();

//CONNECT MONGOOSE
mongoose.connect('mongodb://localhost/auth_demo_app', { useNewUrlParser: true });

//EXPRESS SETUP
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(require('express-session')({
  secret: 'seonghwa is the sexiest ateez member',
  resave: false,
  saveUninitialized: false
}));

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

//ROUTES
app.get('/', (req,res)=>{
  res.render('home');
});

app.get('/secret', (req,res)=>{
  res.render('secret');
});

//CONNECT TO LOCAL SERVER
app.listen(3000, ()=>{
  console.log('server is running!');
});
