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

router.post('/', (req,res)=>{
  let announcement = new Announcement({
    title: req.body.title,
    description: req.body.description
  });
  announcement.save((err,announcement)=>{
    if(err){
      handleError(err,res);
      return;
    }
    if(!req.user){
      handleUnautorized(res);
      return;
    }
    handleSuccess(announcement,res);
  });
});




module.exports = router;