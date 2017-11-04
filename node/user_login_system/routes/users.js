var express = require('express');
var router = express.Router();

/* GET users page. */
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
  var password_confirmation = req.body.password_confirmation;

  // Check for image field
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

  // Form validation
  req.checkBody('name', 'Name field is required').notEmpty();
  req.checkBody('email', 'Email field is required').notEmpty();
  req.checkBody('email', 'Email not valid').isEmail();
  req.checkBody('username', 'Username field is required').notEmpty();
  req.checkBody('password', 'Password field is required').notEmpty();
  req.checkBody('password_confirmation', 'Passwords do not match').equals(password);

  // Check for errors
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

    // Create user
    user.createUser(newUser, function(error, user) {
      if (err) throw err;
      console.log(user);
    });

    req.flash('success', 'You are now registered and may log in.');

    res.location('/');
    res.redirect('/');
  }
});

module.exports = router;
