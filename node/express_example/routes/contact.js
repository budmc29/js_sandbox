var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'user@example.com',
      pass: 'something'
    }
  });

  var mailOptions = {
    from: 'User Example <user@example.com>',
    to: 'recipient@example.com',
    subject: 'Website Submission',
    text: 'New submisson: Name: ' + req.body.name + ', Email: ' + req.body.email + ', Message: ' + req.body.message
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.redirect('/');
    } else {
      console.log('Message sent' + info.response);
      res.redirect('/');
    }
  });
});

module.exports = router;
