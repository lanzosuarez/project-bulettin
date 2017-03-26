import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Chat from 'material-ui/svg-icons/communication/chat';
import Event from 'material-ui/svg-icons/action/event';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Announcements', icon: <Web/>, link: '/announcements' },
    { text: 'CpE Schedules', icon: <GridOn/>, link: '/schedules' },
    { text: 'Events', icon: <Event/>, link: '/events' },
    { text: 'Guest View', icon:<Web/>, link: '/' },

  ],
  tablePage: {
    items: [
      {id:"1", subject_code: 'HIST1023', description:'Buhay, Mga Gawain at Sinulat ni Rizal', section_code:'BSCOE 2-1', lec:"3", lab:"0", units:"3", room_no:"",schedule:"M 07:30AM-10:30AM"},
      {id:"2", subject_code: 'COEN 3332', description:'Computer Hardware and Fundamentals', section_code:'BSCOE 2-1', lec:"0", lab:"6", units:"2", room_no:"",schedule:"M/TH 10:30AM-01:30PM/10:30AM-01:30PM"},
      {id:"3", subject_code: 'COEN 3054', description:'Data Structures and Algorithm Analysis', section_code:'BSCOE 2-1', lec:"3", lab:"3", units:"4", room_no:"",schedule:"T/T/F/F 07:30AM-09:00AM/09:00AM-10:30AM/07:30AM-09:00AM/09:00AM-10:30AM"},
      {id:"4", subject_code: 'PSYC 1013', description:'General Psychology', section_code:'BSCOE 2-1', lec:"3", lab:"0", units:"3", room_no:"",schedule:"W 10:30AM-01:30PM"},
      {id:"5", subject_code: 'MATH 2094', description:'Integral Calculus', section_code:'BSCOE 2-1', lec:"4", lab:"0", units:"4", room_no:"",schedule:"T/F 10:30AM-12:30PM/10:30AM-12:30PM"},
      {id:"6", subject_code: 'LITE 1013', description:'Philippine Literature', section_code:'BSCOE 2-1', lec:"3", lab:"0", units:"3", room_no:"",schedule:"TH 07:30AM-10:30AM"},
      {id:"7", subject_code: 'POSC 1013', description:'Politics and Governance with Philippine Constitution', section_code:'BSCOE 2-1', lec:"3", lab:"0", units:"3", room_no:"",schedule:"W 03:00PM-06:00PM"},
      {id:"8", subject_code: 'STAT 2053', description:'Statistics and Probability', section_code:'BSCOE 2-1', lec:"3", lab:"0", units:"3", room_no:"",schedule:"W 07:30AM-10:30AM"},
      {id:"9", subject_code: 'PHED 1352', description:'Team Sports-Basketball', section_code:'BSCOE 2-1', lec:"2", lab:"0", units:"2", room_no:"",schedule:"T 01:00PM-03:00PM"}

      //-----------------------------WAG MO TONG IDELETE----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
      // {id:"1", subject_code: 'HIST1023', description:'Buhay, Mga Gawain at Sinulat ni Rizal', section_code:'BSCOE 2-2', lec:"3", lab:"0", units:"3", room_no:"",schedule:"M 10:30AM-01:30PM"},
      // {id:"2", subject_code: 'COEN 3332', description:'Computer Hardware and Fundamentals', section_code:'BSCOE 2-2', lec:"0", lab:"6", units:"2", room_no:"",schedule:"M/TH 01:30PM-04:30PM/01:30PM-04:30PM"},
      // {id:"3", subject_code: 'COEN 3054', description:'Data Structures and Algorithm Analysis', section_code:'BSCOE 2-2', lec:"3", lab:"3", units:"4", room_no:"",schedule:"T/T/F/F 10:30AM-12:00PM/12:00PM-01:30PM/10:30AM-12:00PM/12:00PM-01:30PM"},
      // {id:"4", subject_code: 'PSYC 1013', description:'General Psychology', section_code:'BSCOE 2-2', lec:"3", lab:"0", units:"3", room_no:"",schedule:"W 07:30AM-10:30AM"},
      // {id:"5", subject_code: 'MATH 2094', description:'Integral Calculus', section_code:'BSCOE 2-2', lec:"4", lab:"0", units:"4", room_no:"",schedule:"T/F 08:00AM-10:00AM/08:00AM-10:00AM"},
      // {id:"6", subject_code: 'LITE 1013', description:'Philippine Literature', section_code:'BSCOE 2-2', lec:"3", lab:"0", units:"3", room_no:"",schedule:"TH 10:30AM-01:30PM"},
      // {id:"7", subject_code: 'POSC 1013', description:'Politics and Governance with Philippine Constitution', section_code:'BSCOE 2-2', lec:"3", lab:"0", units:"3", room_no:"",schedule:"F 01:30PM-04:30PM"},
      // {id:"8", subject_code: 'STAT 2053', description:'Statistics and Probability', section_code:'BSCOE 2-2', lec:"3", lab:"0", units:"3", room_no:"",schedule:"T 01:30PM-04:30PM"},
      // {id:"9", subject_code: 'PHED 1352', description:'Team Sports-Basketball', section_code:'BSCOE 2-2', lec:"2", lab:"0", units:"2", room_no:"",schedule:"W 10:30AM-12:30PM"},
      
      // {id:"1", subject_code: 'HIST1023', description:'Buhay, Mga Gawain at Sinulat ni Rizal', section_code:'BSCOE 2-3', lec:"3", lab:"0", units:"3", room_no:"",schedule:"W 07:30AM-10:30AM"},
      // {id:"2", subject_code: 'COEN 3332', description:'Computer Hardware and Fundamentals', section_code:'BSCOE 2-3', lec:"0", lab:"6", units:"2", room_no:"",schedule:"T/F 06:00PM-09:00PM/06:00PM-09:00PM"},
      // {id:"3", subject_code: 'COEN 3054', description:'Data Structures and Algorithm Analysis', section_code:'BSCOE 2-3', lec:"3", lab:"3", units:"4", room_no:"",schedule:"T/F 01:30PM-04:30PM/01:30PM-04:30PM"},
      // {id:"4", subject_code: 'PSYC 1013', description:'General Psychology', section_code:'BSCOE 2-3', lec:"3", lab:"0", units:"3", room_no:"",schedule:"W 04:30PM-07:30PM"},
      // {id:"5", subject_code: 'MATH 2094', description:'Integral Calculus', section_code:'BSCOE 2-3', lec:"4", lab:"0", units:"4", room_no:"",schedule:"S 12:00PM-04:00PM"},
      // {id:"6", subject_code: 'LITE 1013', description:'Philippine Literature', section_code:'BSCOE 2-3', lec:"3", lab:"0", units:"3", room_no:"",schedule:"S 07:30AM-10:30AM"},
      // {id:"7", subject_code: 'POSC 1013', description:'Politics and Governance with Philippine Constitution', section_code:'BSCOE 2-3', lec:"3", lab:"0", units:"3", room_no:"",schedule:"F 10:30AM-01:30PM"},
      // {id:"8", subject_code: 'STAT 2053', description:'Statistics and Probability', section_code:'BSCOE 2-3', lec:"3", lab:"0", units:"3", room_no:"",schedule:"T 10:30AM-01:30P"},
      // {id:"9", subject_code: 'PHED 1352', description:'Team Sports-Basketball', section_code:'BSCOE 2-3', lec:"2", lab:"0", units:"2", room_no:"",schedule:"W 01:00PM-03:00PM},
      
      // {id:"1", subject_code: 'HIST1023', description:'Buhay, Mga Gawain at Sinulat ni Rizal', section_code:'BSCOE 2-4', lec:"3", lab:"0", units:"3", room_no:"",schedule:"W 10:30AM-01:30PM"},
      // {id:"2", subject_code: 'COEN 3332', description:'Computer Hardware and Fundamentals', section_code:'BSCOE 2-4', lec:"0", lab:"6", units:"2", room_no:"",schedule:"TH/TH 01:00PM-04:00PM/04:30PM-07:30PM"},
      // {id:"3", subject_code: 'COEN 3054', description:'Data Structures and Algorithm Analysis', section_code:'BSCOE 2-4', lec:"3", lab:"3", units:"4", room_no:"",schedule:"F/F 07:30AM-10:30AM/10:30AM-01:30PM"},
      // {id:"4", subject_code: 'PSYC 1013', description:'General Psychology', section_code:'BSCOE 2-4', lec:"3", lab:"0", units:"3", room_no:"",schedule:"W 01:30PM-04:30PM"},
      // {id:"5", subject_code: 'MATH 2094', description:'Integral Calculus', section_code:'BSCOE 2-4', lec:"4", lab:"0", units:"4", room_no:"",schedule:"S 02:00PM-06:00PM"},
      // {id:"6", subject_code: 'LITE 1013', description:'Philippine Literature', section_code:'BSCOE 2-4', lec:"3", lab:"0", units:"3", room_no:"",schedule:"S 10:30AM-01:30PM"},
      // {id:"7", subject_code: 'POSC 1013', description:'Politics and Governance with Philippine Constitution', section_code:'BSCOE 2-4', lec:"3", lab:"0", units:"3", room_no:"",schedule:"W 06:00PM-09:00PM"},
      // {id:"8", subject_code: 'STAT 2053', description:'Statistics and Probability', section_code:'BSCOE 2-4', lec:"3", lab:"0", units:"3", room_no:"",schedule:"F 03:00PM-06:00PM"},
      // {id:"9", subject_code: 'PHED 1352', description:'Team Sports-Basketball', section_code:'BSCOE 2-4', lec:"2", lab:"0", units:"2", room_no:"",schedule:"TH 10:30AM-12:30PM"},
      
      // {id:"1", subject_code: 'HIST1023', description:'Buhay, Mga Gawain at Sinulat ni Rizal', section_code:'BSCOE 2-5', lec:"3", lab:"0", units:"3", room_no:"",schedule:"S 01:30PM-04:30PM"},
      // {id:"2", subject_code: 'COEN 3332', description:'Computer Hardware and Fundamentals', section_code:'BSCOE 2-5', lec:"0", lab:"6", units:"2", room_no:"",schedule:"W/W 01:30PM-04:30PM/04:30PM-07:30PM"},
      // {id:"3", subject_code: 'COEN 3054', description:'Data Structures and Algorithm Analysis', section_code:'BSCOE 2-5', lec:"3", lab:"3", units:"4", room_no:"",schedule:"F/F 03:00PM-06:00PM/06:00PM-09:00PM"},
      // {id:"4", subject_code: 'PSYC 1013', description:'General Psychology', section_code:'BSCOE 2-5', lec:"3", lab:"0", units:"3", room_no:"",schedule:"S 10:30AM-01:30PM"},
      // {id:"5", subject_code: 'MATH 2094', description:'Integral Calculus', section_code:'BSCOE 2-5', lec:"4", lab:"0", units:"4", room_no:"",schedule:"S 05:00PM-09:00PM"},
      // {id:"6", subject_code: 'LITE 1013', description:'Philippine Literature', section_code:'BSCOE 2-5', lec:"3", lab:"0", units:"3", room_no:"",schedule:"TH 10:30AM-01:30PM"},
      // {id:"7", subject_code: 'POSC 1013', description:'Politics and Governance with Philippine Constitution', section_code:'BSCOE 2-5', lec:"3", lab:"0", units:"3", room_no:"",schedule:"TH 01:30PM-04:30PM"},
      // {id:"8", subject_code: 'STAT 2053', description:'Statistics and Probability', section_code:'BSCOE 2-5', lec:"3", lab:"0", units:"3", room_no:"",schedule:"TH 06:00PM-09:00PM"},
      // {id:"9", subject_code: 'PHED 1352', description:'Team Sports-Basketball', section_code:'BSCOE 2-5', lec:"2", lab:"0", units:"2", room_no:"",schedule:"F 10:00AM-12:00PM"},
      
    ]
  },
  dashBoardPage: {
    deptTop: [
      {id: 1, name: 'John Doe', subject: 'Data Structures and Algorithm Analysis'},
      {id: 2, name: 'John Doe', subject: 'Logic Circuits and Switching Theory'},
      {id: 3, name: 'John Doe', subject: 'Operating Systems'},
      {id: 4, name: 'John Doe', subject: 'Computer Hardware and Fundamentals'},
      {id: 5, name: 'John Doe', subject: 'Electronics Circuit Analysis and Design'},
      {id: 6, name: 'John Doe', subject: 'Computer System and Architecture'},
      {id: 7, name: 'John Doe', subject: 'Computer Networks'},
      {id: 8, name: 'John Doe', subject: 'Circuits II'},
      {id: 9, name: 'John Doe', subject: 'Data Communications'}
    ],
    visitors: [
      {name: 'Jan', uv: 1700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    inquiries: [
      {name: 'Jan', pv: 1700},
      {name: 'Feb', pv: 3000},
      {name: 'Mar', pv: 2000},
      {name: 'Apr', pv: 2780},
      {name: 'May', pv: 2000},
      {name: 'Jun', pv: 1800},
      {name: 'Jul', pv: 2600},
      {name: 'Aug', pv: 2900},
      {name: 'Sep', pv: 3500},
      {name: 'Oct', pv: 3000},
      {name: 'Nov', pv: 2400},
      {name: 'Dec', pv: 2780}
    ],
    bulletinData: [
      {name: 'Schedules', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Events', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'Announcements', value: 300, color: purple600, icon: <ExpandLess/>}
    ],
    events:[
       {
          'title': 'All Day Event',
          'allDay': true,
          'start': new Date(2015, 3, 0),
          'end': new Date(2015, 3, 1)
        },
        {
          'title': 'Long Event',
          'start': new Date(2015, 3, 7),
          'end': new Date(2015, 3, 10)
        },

        {
          'title': 'DTS STARTS',
          'start': new Date(2016, 2, 13, 0, 0, 0),
          'end': new Date(2016, 2, 20, 0, 0, 0)
        },

        {
          'title': 'DTS ENDS',
          'start': new Date(2016, 10, 6, 0, 0, 0),
          'end': new Date(2016, 10, 13, 0, 0, 0)
        },

        {
          'title': 'Some Event',
          'start': new Date(2015, 3, 9, 0, 0, 0),
          'end': new Date(2015, 3, 9, 0, 0, 0)
        },
        {
          'title': 'Conference',
          'start': new Date(2015, 3, 11),
          'end': new Date(2015, 3, 13),
          desc: 'Big conference for important people'
        },
        {
          'title': 'Meeting',
          'start': new Date(2015, 3, 12, 10, 30, 0, 0),
          'end': new Date(2015, 3, 12, 12, 30, 0, 0),
          desc: 'Pre-meeting meeting, to prepare for the meeting'
        },
        {
          'title': 'Lunch',
          'start':new Date(2015, 3, 12, 12, 0, 0, 0),
          'end': new Date(2015, 3, 12, 13, 0, 0, 0),
          desc: 'Power lunch'
        },
        {
          'title': 'Meeting',
          'start':new Date(2015, 3, 12,14, 0, 0, 0),
          'end': new Date(2015, 3, 12,15, 0, 0, 0)
        },
        {
          'title': 'Happy Hour',
          'start':new Date(2015, 3, 12, 17, 0, 0, 0),
          'end': new Date(2015, 3, 12, 17, 30, 0, 0),
          desc: 'Most important meal of the day'
        },
        {
          'title': 'Dinner',
          'start':new Date(2015, 3, 12, 20, 0, 0, 0),
          'end': new Date(2015, 3, 12, 21, 0, 0, 0)
        },
        {
          'title': 'Birthday Party',
          'start':new Date(2015, 3, 13, 7, 0, 0),
          'end': new Date(2015, 3, 13, 10, 30, 0)
        }
    ]
  }
};

export default data;
