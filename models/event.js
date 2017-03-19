let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

const eventSchema = new Schema({
  admin: { 
    type: Schema.Types.ObjectId, ref:'User',
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
  finishDate:{
    type: Date
  }
});

module.exports = mongooses.model('Event', eventSchema);