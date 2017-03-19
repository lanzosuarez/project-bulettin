let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

const schedSchema = new Schema({
  year: {
    type: Number,
    require:[true, "Year required"]
  },
  subject_code:{
    type: String,
    required: [true, "Please supply a subject code"]
  },
  description:{
    type: String,
    required: [true, "Please supply a description"]
  },
  section_code:{
    type: String,
    default: "0"
  },
  lec:{
    type: String,
    default: "0"
  },
  lab:{
    type: String,
    default: "0"
  },
  units:{
    type: String,
    default: "0"
  },
  room_no:{
    type: String,
    default: ""
  },
  schedule:{
    type: String,
    required: [true, "Subject schedule is required"]
  },
  section: {
    type:Number,
    required: [true,"Section is required"]
  }
});

module.exports = mongoose.model('Schedule', schedSchema);