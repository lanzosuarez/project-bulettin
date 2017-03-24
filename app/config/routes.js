import React from 'react';
import ReactRouter, { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import DashboardCon from '../containers/DashboardCon';
import SchedulesCon from '../containers/SchedulesCon';
import CalendarCon from '../containers/CalendarCon';
import AnnounceCon from '../containers/AnnounceCon';
import ChatBoxCon from '../containers/ChatBoxCon';
import GuestCon from '../containers/GuestCon';
import RegisterCon from '../containers/RegisterCon';
import LoginCon from '../containers/LoginCon';
import NotFoundPage from '../containers/NotFoundPage';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={GuestCon} />
        <Route path="dashboard" component={DashboardCon} />
        <Route path="announcements" component={AnnounceCon} />
        <Route path="announcements/:ann" component={AnnounceCon} />
        <Route path="schedules" component={SchedulesCon} />
        <Route path="schedules/:sched" component={SchedulesCon} />
        <Route path="events/:event" component={CalendarCon} />
        <Route path="events" component={CalendarCon} />
        <Route path="register" component={RegisterCon} />
        <Route path="login" component={LoginCon} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);

export default routes;