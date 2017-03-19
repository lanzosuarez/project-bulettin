let data = [
  // { year: 2, subject_code: 'HIST1023', description: 'Buhay, Mga Gawain at Sinulat ni Rizal', section_code: 'BSCOE2-1', lec: "3", lab: "0", units: "3", room_no: "", schedule: "M 07:30AM-10:30AM" },
  // { year: 2, subject_code: 'COEN3332', description: 'Computer Hardware and Fundamentals', section_code: 'BSCOE2-1', lec: "0", lab: "6", units: "2", room_no: "", schedule: "M/TH 10:30AM-01:30PM/10:30AM-01:30PM" },
  // { year: 2, subject_code: 'COEN3054', description: 'Data Structures and Algorithm Analysis', section_code: 'BSCOE2-1', lec: "3", lab: "3", units: "4", room_no: "", schedule: "T/T/F/F 07:30AM-09:00AM/09:00AM-10:30AM/07:30AM-09:00AM/09:00AM-10:30AM" },
  // {
  //   year: 2, subject_code: 'PSYC1013', description: 'General Psychology', section_code: 'BSCOE2-1', lec: "3", lab: "0", units: "3", room_no: "", schedule: "W 10:30AM-01:30PM"
  // },
  // {
  //   year: 2, subject_code: 'MATH2094', description: 'Integral Calculus', section_code: 'BSCOE2-1', lec: "4", lab: "0", units: "4", room_no: "", schedule: "T/F 10:30AM-12:30PM/10:30AM-12:30PM"
  // },
  // {
  //   year: 2, subject_code: 'LITE1013', description: 'Philippine Literature', section_code: 'BSCOE2-1', lec: "3", lab: "0", units: "3", room_no: "", schedule: "TH 07:30AM-10:30AM"
  // },
  // {
  //   year: 2, subject_code: 'POSC1013', description: 'Politics and Governance with Philippine Constitution', section_code: 'BSCOE2-1', lec: "3", lab: "0", units: "3", room_no: "", schedule: "W 03:00PM-06:00PM"
  // },
  // {
  //   year: 2, subject_code: 'STAT2053', description: 'Statistics and Probability', section_code: 'BSCOE2-1', lec: "3", lab: "0", units: "3", room_no: "", schedule: "W 07:30AM-10:30AM"
  // },
  // {
  //   year: 2, subject_code: 'PHED1352', description: 'Team Sports-Basketball', section_code: 'BSCOE2-1', lec: "2", lab: "0", units: "2", room_no: "", schedule: "T 01:00PM-03:00PM"
  // }

  // { id: "1", subject_code: 'HIST1023', description: 'Buhay, Mga Gawain at Sinulat ni Rizal', section_code: 'BSCOE 2-2', lec: "3", lab: "0", units: "3", room_no: "", schedule: "M 10:30AM-01:30PM" },
  // { id: "2", subject_code: 'COEN 3332', description: 'Computer Hardware and Fundamentals', section_code: 'BSCOE 2-2', lec: "0", lab: "6", units: "2", room_no: "", schedule: "M/TH 01:30PM-04:30PM/01:30PM-04:30PM" },
  // { id: "3", subject_code: 'COEN 3054', description: 'Data Structures and Algorithm Analysis', section_code: 'BSCOE 2-2', lec: "3", lab: "3", units: "4", room_no: "", schedule: "T/T/F/F 10:30AM-12:00PM/12:00PM-01:30PM/10:30AM-12:00PM/12:00PM-01:30PM" },
  // { id: "4", subject_code: 'PSYC 1013', description: 'General Psychology', section_code: 'BSCOE 2-2', lec: "3", lab: "0", units: "3", room_no: "", schedule: "W 07:30AM-10:30AM" },
  // { id: "5", subject_code: 'MATH 2094', description: 'Integral Calculus', section_code: 'BSCOE 2-2', lec: "4", lab: "0", units: "4", room_no: "", schedule: "T/F 08:00AM-10:00AM/08:00AM-10:00AM" },
  // { id: "6", subject_code: 'LITE 1013', description: 'Philippine Literature', section_code: 'BSCOE 2-2', lec: "3", lab: "0", units: "3", room_no: "", schedule: "TH 10:30AM-01:30PM" },
  // { id: "7", subject_code: 'POSC 1013', description: 'Politics and Governance with Philippine Constitution', section_code: 'BSCOE 2-2', lec: "3", lab: "0", units: "3", room_no: "", schedule: "F 01:30PM-04:30PM" },
  // { id: "8", subject_code: 'STAT 2053', description: 'Statistics and Probability', section_code: 'BSCOE 2-2', lec: "3", lab: "0", units: "3", room_no: "", schedule: "T 01:30PM-04:30PM" },
  // { id: "9", subject_code: 'PHED 1352', description: 'Team Sports-Basketball', section_code: 'BSCOE 2-2', lec: "2", lab: "0", units: "2", room_no: "", schedule: "W 10:30AM-12:30PM" },
  // { id: "1", subject_code: 'HIST1023', description: 'Buhay, Mga Gawain at Sinulat ni Rizal', section_code: 'BSCOE 2-3', lec: "3", lab: "0", units: "3", room_no: "", schedule: "W 07:30AM-10:30AM" },
  // { id: "2", subject_code: 'COEN 3332', description: 'Computer Hardware and Fundamentals', section_code: 'BSCOE 2-3', lec: "0", lab: "6", units: "2", room_no: "", schedule: "T/F 06:00PM-09:00PM/06:00PM-09:00PM" },
  // { id: "3", subject_code: 'COEN 3054', description: 'Data Structures and Algorithm Analysis', section_code: 'BSCOE 2-3', lec: "3", lab: "3", units: "4", room_no: "", schedule: "T/F 01:30PM-04:30PM/01:30PM-04:30PM" },
  // { id: "4", subject_code: 'PSYC 1013', description: 'General Psychology', section_code: 'BSCOE 2-3', lec: "3", lab: "0", units: "3", room_no: "", schedule: "W 04:30PM-07:30PM" },
  // { id: "5", subject_code: 'MATH 2094', description: 'Integral Calculus', section_code: 'BSCOE 2-3', lec: "4", lab: "0", units: "4", room_no: "", schedule: "S 12:00PM-04:00PM" },
  // { id: "6", subject_code: 'LITE 1013', description: 'Philippine Literature', section_code: 'BSCOE 2-3', lec: "3", lab: "0", units: "3", room_no: "", schedule: "S 07:30AM-10:30AM" },
  // { id: "7", subject_code: 'POSC 1013', description: 'Politics and Governance with Philippine Constitution', section_code: 'BSCOE 2-3', lec: "3", lab: "0", units: "3", room_no: "", schedule: "F 10:30AM-01:30PM" },
  // { id: "8", subject_code: 'STAT 2053', description: 'Statistics and Probability', section_code: 'BSCOE 2-3', lec: "3", lab: "0", units: "3", room_no: "", schedule: "T 10:30AM-01:30P" },
  // { id: "9", subject_code: 'PHED 1352', description: 'Team Sports-Basketball', section_code: 'BSCOE 2-3', lec: "2", lab: "0", units: "2", room_no: "", schedule: "W 01:00PM-03:00PM" },
  // { id: "1", subject_code: 'HIST1023', description: 'Buhay, Mga Gawain at Sinulat ni Rizal', section_code: 'BSCOE 2-4', lec: "3", lab: "0", units: "3", room_no: "", schedule: "W 10:30AM-01:30PM" },
  // { id: "2", subject_code: 'COEN 3332', description: 'Computer Hardware and Fundamentals', section_code: 'BSCOE 2-4', lec: "0", lab: "6", units: "2", room_no: "", schedule: "TH/TH 01:00PM-04:00PM/04:30PM-07:30PM" },
  // { id: "3", subject_code: 'COEN 3054', description: 'Data Structures and Algorithm Analysis', section_code: 'BSCOE 2-4', lec: "3", lab: "3", units: "4", room_no: "", schedule: "F/F 07:30AM-10:30AM/10:30AM-01:30PM" },
  // { id: "4", subject_code: 'PSYC 1013', description: 'General Psychology', section_code: 'BSCOE 2-4', lec: "3", lab: "0", units: "3", room_no: "", schedule: "W 01:30PM-04:30PM" },
  // { id: "5", subject_code: 'MATH 2094', description: 'Integral Calculus', section_code: 'BSCOE 2-4', lec: "4", lab: "0", units: "4", room_no: "", schedule: "S 02:00PM-06:00PM" },
  // { id: "6", subject_code: 'LITE 1013', description: 'Philippine Literature', section_code: 'BSCOE 2-4', lec: "3", lab: "0", units: "3", room_no: "", schedule: "S 10:30AM-01:30PM" },
  // { id: "7", subject_code: 'POSC 1013', description: 'Politics and Governance with Philippine Constitution', section_code: 'BSCOE 2-4', lec: "3", lab: "0", units: "3", room_no: "", schedule: "W 06:00PM-09:00PM" },
  // { id: "8", subject_code: 'STAT 2053', description: 'Statistics and Probability', section_code: 'BSCOE 2-4', lec: "3", lab: "0", units: "3", room_no: "", schedule: "F 03:00PM-06:00PM" },
  // { id: "9", subject_code: 'PHED 1352', description: 'Team Sports-Basketball', section_code: 'BSCOE 2-4', lec: "2", lab: "0", units: "2", room_no: "", schedule: "TH 10:30AM-12:30PM" },
  { id: "1", subject_code: 'HIST1023', description: 'Buhay, Mga Gawain at Sinulat ni Rizal', section_code: 'BSCOE 2-5', lec: "3", lab: "0", units: "3", room_no: "", schedule: "S 01:30PM-04:30PM" },
  { id: "2", subject_code: 'COEN 3332', description: 'Computer Hardware and Fundamentals', section_code: 'BSCOE 2-5', lec: "0", lab: "6", units: "2", room_no: "", schedule: "W/W 01:30PM-04:30PM/04:30PM-07:30PM" },
  { id: "3", subject_code: 'COEN 3054', description: 'Data Structures and Algorithm Analysis', section_code: 'BSCOE 2-5', lec: "3", lab: "3", units: "4", room_no: "", schedule: "F/F 03:00PM-06:00PM/06:00PM-09:00PM" },
  { id: "4", subject_code: 'PSYC 1013', description: 'General Psychology', section_code: 'BSCOE 2-5', lec: "3", lab: "0", units: "3", room_no: "", schedule: "S 10:30AM-01:30PM" },
  { id: "5", subject_code: 'MATH 2094', description: 'Integral Calculus', section_code: 'BSCOE 2-5', lec: "4", lab: "0", units: "4", room_no: "", schedule: "S 05:00PM-09:00PM" },
  { id: "6", subject_code: 'LITE 1013', description: 'Philippine Literature', section_code: 'BSCOE 2-5', lec: "3", lab: "0", units: "3", room_no: "", schedule: "TH 10:30AM-01:30PM" },
  { id: "7", subject_code: 'POSC 1013', description: 'Politics and Governance with Philippine Constitution', section_code: 'BSCOE 2-5', lec: "3", lab: "0", units: "3", room_no: "", schedule: "TH 01:30PM-04:30PM" },
  { id: "8", subject_code: 'STAT 2053', description: 'Statistics and Probability', section_code: 'BSCOE 2-5', lec: "3", lab: "0", units: "3", room_no: "", schedule: "TH 06:00PM-09:00PM" },
  { id: "9", subject_code: 'PHED 1352', description: 'Team Sports-Basketball', section_code: 'BSCOE 2-5', lec: "2", lab: "0", units: "2", room_no: "", schedule: "F 10:00AM-12:00PM" },
];

module.exports = data;