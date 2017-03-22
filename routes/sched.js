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

function saveItem(item, res, req) {
  console.log(item)
  item.save((err, sched) => {
    if (err) {
      handleError(err, res);
      return;
    }
    if (!req.user) {
      handleUnautorized(res);
      return;
    }
    handleSuccess(sched, res);
  });
}


router.post('/', (req, res) => {
  if (req.body._id) {
    Schedule.findById(req.body._id, (err, sched) => {
      if (err) {
        handleError(err, res);
        return;
      }
      if (!req.user) {
        handleUnautorized(res);
        return;
      }
      if (!sched) {
        return res.json({
          success: false,
          response: "Schedule not found!"
        });
      }
      sched.year = req.body.year;
      sched.section = req.body.section;
      sched.description = req.body.description;
      sched.lec = String(req.body.lec);
      sched.lab = String(req.body.lab);
      sched.section_code = req.body.section_code;
      sched.subject_code = req.body.subject_code;
      sched.units = req.body.units;
      sched.room_no = req.body.room_no;
      sched.schedule = req.body.schedule;
      saveItem(sched, res, req);
    });
  } else {
    let newSched = new Schedule({
      year: req.body.year,
      section: req.body.section,
      description: req.body.description,
      lec: String(req.body.lec),
      lab: String(req.body.lab),
      section_code: req.body.section_code,
      subject_code: req.body.subject_code,
      units: req.body.units,
      room_no: req.body.room_no,
      schedule: req.body.schedule
    });
    saveItem(newSched, res, req);
    return;
  }
});


router.delete('/:id', (req, res) => {
  Schedule.findById(req.params.id, (err, sched) => {
    if (err) {
      return handleError(err,res);
    }
    if (!req.user) {
      return handleUnautorized(res);
    }
    if (!sched) {
      return res.json({
        success: false,
        response: "Schedule not found!"
      });
    }
    sched.remove((err, sched) => {
      if (err) {
        return handleError(err,res);
      }
      handleSuccess(sched,res);
    })
  });
});


function handleSuccess(r, res) {
  res.json({
    success: true,
    response: r
  });
}
function handleError(r, res) {
  res.json({
    success: false,
    response: r
  });
}
function handleUnautorized(res) {
  res.json({
    success: false,
    response: "Unauthorized"
  });
}

module.exports = router;