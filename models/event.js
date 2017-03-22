let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

const eventSchema = new Schema({
  title: {
    type: String,
    required: [true, "An event needs to have a title"]
  },
  description:{
    type: String,
    required: [true, "You need to supply a description"]
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