const express = require('express'), //import express
  router = express.Router(), //import express router
  Schedule = require('../models/schedule'); //import shced Schema

router.get('/', (req, res) => {
  Schedule.find((err, scheds) => {
    if (err) {
      return res.json({
        success: false,
        response: err
      });
    }
    res.json({
      success: true,
      response: scheds
    });
  });
});

module.exports = router;