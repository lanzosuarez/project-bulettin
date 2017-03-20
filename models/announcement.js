let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

const announcementSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please supply a title"]
  },
  description:{
    type: String,
    required: [true, "Please supply a description"]
  },
  createDate:{
    type: Date,
    default: Date.now()
  },
  isExpired:{
    type: Boolean,
    default: false
  }
});

module.exports = mongooses.model('Announcement', announcementSchema);