var express = require('express');
var router = express.Router();
var User = require('../models/user');
var data = require('./data');
var Schedule = require('../models/schedule');

/* GET users listing. */
router.post('/login', function(req, res, next) {
  User.authenticate()(req.body.username, req.body.password,(err, user, options)=>{
    if (err) return res.status(500).json({
      success:false,
      title:'Error',
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
        req.login(user,(err)=>{
           if (err) return res.json({
            success:false,
            title:'Error',
            response:err
          });
          res.status(200).json({
            success: true,
          });
        });
      }
  });
});

router.post('/signup', function(req, res){
  User.register(new User({
    username: req.body.username,
  }), req.body.password, function(err, user){
    if(err){
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


router.get('/getUser', (req, res)=>{
  const user = req.user;
  console.log(user);
  return res.json({
    response: user===undefined?null:user
  });
});


router.post('/logout', (req, res)=>{
  req.logout();
  req.session.destroy();
  res.json({
    redirect:'/'
  });
});

router.get('/save',(req,res)=>{
  data.map(d=>{
    let s = new Schedule({
        year:2,
        subject_code: d.subject_code,
        description: d.description,
        section_code: d.section_code,
        lec: d.lec,
        lab: d.lab,
        units: d.units,
        room_no: d.room_no,
        schedule: d.schedule,
        section: 5
    });
    s.save(err=>{
      if(err) {
        return res.json({success:false});
      }
    });
  });
  res.json({success:true});
});


module.exports = router;
