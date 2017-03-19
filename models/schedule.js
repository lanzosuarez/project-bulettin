let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

const schedSchema = new Schema({
  subjectCode:{
    type: String,
    required: [true, "Please supply a subject code"]
  },
  description:{
    type: String,
    required: [true, "Please supply a description"]
  },
  sectionCode:{
    type: String,
    default: "0"
  },
  lecHrs:{
    type: String,
    default: "0"
  },
  labHrs:{
    type: String,
    required: [true]
  },
  units:{
    type: Number,
    default: 0
  }
  Room:{
    type: String,
    default: ""
  },
  sched:{
    type: String,
    required: [true, "Subject schedule is required"]
  }
});

module.exports = mongoose.model('Schedule', schedSchema);