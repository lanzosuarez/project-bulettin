let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const schedSchema = new Schema({
  year: {
    type: Number,
    default:1
  },
  subject_code:{
    type: String,
    required: [true, "Subject Code was not supplied"]
  },
  description:{
    type: String,
    required: [true, "Name of the subject is missing"]
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
    required: [true, "Subject schedule is missing"]
  },
  section: {
    type:Number,
    default:1
  }
});

module.exports = mongoose.model('Schedule', schedSchema);