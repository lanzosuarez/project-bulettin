import React from 'react';
import ReactRouter, { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import DashboardCon from '../containers/DashboardCon';
import Schedules from '../containers/Schedules';
import CalendarCon from '../containers/CalendarCon';
import AnnounceCon from '../containers/AnnounceCon';
import ChatBoxCon from '../containers/ChatBoxCon';
import GuestCon from '../containers/GuestCon';
import Register from '../containers/Register';
import LoginCon from '../containers/LoginCon';

const routes = (
        <Route path="/" component={App}>
            <IndexRoute component={GuestCon}/>
            <Route path="dashboard" component={DashboardCon}/>
            <Route path="announcements" component={AnnounceCon}/>
            <Route path="schedules" component={Schedules}/>
            <Route path="event" component={CalendarCon}/>
            <Route path="chat" component={ChatBoxCon}/>
            <Route path="register" component={Register} />
            <Route path="login" component={LoginCon} />
        </Route>
);

export default routes;