const express = require('express'), //import express
  router = express.Router(), //import express router
  Event = require('../models/event');

router.get('/', (req, res) => {
  Event.find((err, events) => {
    if (err) {
      return res.json({
        success: false,
        response: err
      });
    }
    res.json({
      success: true,
      response: events
    });
  });
});

router.post('/', (req, res) => {
  if (req.body._id) {
    Event.findById(req.body._id, (err, event) => {
      if (err) {
        return res.json({
          success: false,
          response: err
        });
      }
      if (!req.user) {
        return res.json({
          success: false,
          response: "Unauthorized"
        });
      }
      if (!event) {
        return res.json({
          success: false,
          response: "Event not found!"
        });
      }
      event.title = req.body.title;
      event.description = req.body.description;
      event.start = req.body.start,
      event.end = req.body.end
      event.save(err => {
        if (err) {
          return res.json({
            success: false,
            response: err
          });
        }
        res.json({
          success: true,
          response: event
        });
      })
    });
  } else {
    let event = new Event({
      title: req.body.title,
      description: req.body.description,
      start: req.body.start,      
      end: req.body.end
    });
    event.save((err, event) => {
      if (err) {
        return res.json({
          success: false,
          response: err
        });
      }
      if (!req.user) {
        return res.status(401).json({
          success: false,
          response: "Unauthorized"
        })
      }
      res.json({
        success: true,
        response: event
      });
    });
  }
});


router.delete('/:id', (req, res) => {
  Event.findById(req.params.id, (err, event) => {
    if (err) {
      return res.json({
        success: false,
        response: err
      });
    }
    if (!req.user) {
      return res.json({
        success: false,
        response: "Unauthorized"
      })
    }
    if (!event) {
      return res.json({
        success: false,
        response: "Event not found!"
      });
    }
    event.remove((err, event) => {
      if (err) {
        return res.json({
          success: false,
          response: err
        });
      }
      res.json({
        success: true,
        response: event
      });
    })
  });
});

module.exports = router;