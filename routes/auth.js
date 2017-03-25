var express = require('express');
var router = express.Router();
var User = require('../models/user');
var data = require('./data');
var Schedule = require('../models/schedule');
var OAuth = require('oauth').OAuth;

/* GET users listing. */
router.post('/login', function (req, res, next) {
  User.authenticate()(req.body.username, req.body.password, (err, user, options) => {
    if (err) return res.status(500).json({
      success: false,
      title: 'Error',
      response: err
    });
    if (user === false) {
      console.log("unauthroized")
      res.json({
        success: false,
        title: 'Error',
        response: options.message
      });
    } else {
      req.login(user, (err) => {
        if (err) return res.json({
          success: false,
          title: 'Error',
          response: err
        });
        res.status(200).json({
          success: true,
        });
      });
    }
  });
});

router.post('/signup', function (req, res) {
  User.register(new User({
    username: req.body.username,
  }), req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      return res.send({
        success: false,
        response: err
      });
    }
    return res.status(201).json({
      success: true,
      redirect: '/login'
    });
  });
});


router.get('/getUser', (req, res) => {
  const user = req.user;
  console.log(user);
  return res.json({
    response: user === undefined ? null : user
  });
});


router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.json({
    redirect: '/'
  });
});

router.get('/getTwitter/:name', (req, res) => {
  const oauth = new OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'JkmtId6YB66fZLaWYJEwJmaz4',
    'WFdmqpnggHLAIeklj4NH9R7LvxB2u9e2anaN8aY9Y7rwWhzav3',
    '1.0A',
    null,
    'HMAC-SHA1'
  );  
  oauth.get(
    'https://api.twitter.com/1.1/users/show.json?screen_name='+req.params.name,
    '385278922-huWDej6nfHZWb0NpqfKuvM43bvmcJ0NLOI6CvLJr', //test user token
    'ovkcuF5kQtS99d420CYPVGapQXOM6CakFCy5JCvVGk3SS', //test user secret            
    function (e, data, twitterRes) {
      if (e){
        console.log("onerror")
        return res.json({
          success:false,
        })
      } 
      return res.send({
        success: true,
        response: JSON.parse(data)
      });
    });
});

module.exports = router;
