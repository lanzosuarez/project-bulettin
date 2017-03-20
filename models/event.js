let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

const eventSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please supply a title"]
  },
  description:{
    type: String,
    required: [true, "Please supply a description"]
  },
  start:{
    type: Date,
    default: new Date()
  },
  end:{
    type: Date
  }
});

module.exports = mongoose.model('Event', eventSchema);