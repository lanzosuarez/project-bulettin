var express = require('express'),
  router = express.Router(),
  Announcement = require('../models/announcement');



function handleSuccess(r, res) {
  res.json({
    success: true,
    response: r
  });
}
function handleError(err, res) {
  res.json({
    success: false,
    response: err
  });
}
function handleUnautorized(res) {
  res.status(401).json({
    success: false,
    response: "Unauthorized"
  });
}

function handleNotFound(res) {
  res.status(404).json({
    success: false,
    response: "Announcement Not Found"
  });
}

router.get('/', (req, res) => {
  Announcement.find((err, announcements) => {
    if (err) {
      handleError(err, res);
      return;
    }
    handleSuccess(announcements, res);
  });
});

router.post('/', (req, res) => {
  if (req.body._id) {
    Announcement.findById(req.body._id, (err, announcement)=>{
      if(err){
        handleError(err,res);
        return;
      }
      if(!req.user){
        handleUnautorized
      }
      announcement.title=req.body.title,
      announcement.description=req.body.description
      announcement.save(err=>{
        if(err){
          handleError(err,res);
          return;
        }
        handleSuccess(announcement,res);
      })
    });
  } else {
    let announcement = new Announcement({
      title: req.body.title,
      description: req.body.description
    });
    announcement.save((err, announcement) => {
      if (err) {
        handleError(err, res);
        return;
      }
      if (!req.user) {
        handleUnautorized(res);
        return;
      }
      handleSuccess(announcement, res);
    });
  }
});

router.delete('/:id', (req,res)=>{
  Announcement.findById(req.params.id, (err,announcement)=>{
    if(err){
      handleError(err,res);
      return;
    }
    if(!req.user){
      handleUnautorized(res);
      return;
    }
    announcement.remove((err, announcement)=>{
      if(err){
        handleError(err,res);
        return;
      }
      handleSuccess(announcement,res);
    });
  });
});


module.exports = router;