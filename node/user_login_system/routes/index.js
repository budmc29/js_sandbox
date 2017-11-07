var express = require('express');
var router = express.Router();

router.get('/', ensureAuthenticated, function (req, res, next) {
  res.render('index', { title: 'Members' });
});

function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  req.flash('error', 'You need to be logged in to see that');

  res.redirect('/users/login');
}

module.exports = router;