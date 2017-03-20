const express = require('express'), //import express
  router = express.Router(), //import express router
  Event = require('../models/event');

router.get('/',(req,res)=>{
  Event.find((err,events)=>{
    if(err){
      return res.json({
        success:false,
        response: err
      });
    }
    if(!req.user){
      return res.status(401).json({
        success:false,
        response:"Unauthorized"
      })
    }
    res.json({
      success:true,
      response: events
    });
  });
});

module.exports = router;