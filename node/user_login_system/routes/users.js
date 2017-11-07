var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register'});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login'});
});

router.post('/register', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password_confirm = req.body.password_confirm;

  if (req.files.profileimage) {
    console.log('uploading file');

    var profileImageOriginal = req.files.profileimage.originalname;
    var profileImageName = req.files.profileimage.name;
    var profileImageMime = req.files.profileimage.mimetype;
    var profileImagePath = req.files.profileimage.path;
    var profileImageExtension = req.files.profileimage.extension;
    var profileImageSize = req.files.profileimage.size;
  } else {
    var profileImageName = 'default_image.png';
  }

  req.checkBody('name', 'Name field is required').notEmpty();
  req.checkBody('email', 'Email field is required').notEmpty();
  req.checkBody('email', 'Email not valid').isEmail();
  req.checkBody('username', 'Username field is required').notEmpty();
  req.checkBody('password', 'Password field is required').notEmpty();
  req.checkBody('password_confirm', 'Passwords do not match').equals(password);

  var errors = req.validationErrors();

  if (errors) {
    res.render('register', {
      errors: errors,
      name: name,
      email: email,
      username: username
    });
  } else {
    var newUser = new User({
      name: name,
      email: email,
      username: username,
      password: password,
      profileimage: profileImageName
    });

    User.createUser(newUser, function(err, user) {
      if (err) throw err;
      console.log(user);
    });

    req.flash('success', 'You are now registered and may log in.');

    res.location('/');
    res.redirect('/');
  }
});

passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username, function (err, user) {
      if (err) throw err;

      if (!user) {
        console.log('Unknown user');
        return done(null, false, { message: 'Unknown user' });
      }

      User.comparePassword(password, user.password, function(err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          console.log('Invalid password');
          return done(null, false, {message: 'Invalid password'})
        }
      });
  });
}));

router.post('/login', passport.authenticate('local', {failureRedirect: '/users/login', failureFlash: 'Invalid username or password'}), function(req, res) {
  console.log('Authentication successful');
  req.flash('success', 'You are logged in');
  res.redirect('/');
});

router.get('/logout', function (req, res) {
  req.logout();

  req.flash('success', 'You have logged out');

  res.redirect('/users/login');
});

module.exports = router;
