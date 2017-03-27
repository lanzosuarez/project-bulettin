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
  dashBoardPage: {
    visitors: [
      {name: 'Jan', visitors: 1700},
      {name: 'Feb', visitors: 3000},
      {name: 'Mar', visitors: 2000},
      {name: 'Apr', visitors: 2280},
      {name: 'May', visitors: 2000},
      {name: 'Jun', visitors: 1800},
      {name: 'Jul', visitors: 2600},
      {name: 'Aug', visitors: 2200},
      {name: 'Sep', visitors: 1500},
      {name: 'Oct', visitors: 2100},
      {name: 'Nov', visitors: 2400},
      {name: 'Dec', visitors: 2480}
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
      {name: 'Schedules', value:0, color: cyan600, icon: <ExpandMore/>},
      {name: 'Events', value:0, color: pink600, icon: <ChevronRight/>},
      {name: 'Announcements', value:0, color: purple600, icon: <ExpandLess/>}
    ],
  }
};

export default data;
