let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

const announcementSchema = new Schema({
  admin: { 
    type: Schema.Types.ObjectId red:'User'
    required: [true, "Admin ID is missing"]
  },
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

module.exports = mongooses.model('Event' eventSchema);