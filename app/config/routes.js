import React from 'react';
import ReactRouter, { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import DashboardCon from '../containers/DashboardCon';
import FormPage from '../containers/FormPage';
import Schedules from '../containers/Schedules';
import Calendar from '../components/dashboard/Calendar';
import ChatBoxCon from '../containers/ChatBoxCon';
import GuestCon from '../containers/GuestCon';
import Register from '../containers/Register';
import LoginCon from '../containers/LoginCon';

const routes = (
        <Route path="/" component={App}>
            <IndexRoute component={GuestCon}/>
            <Route path="dashboard" component={DashboardCon}/>
            <Route path="form" component={FormPage}/>
            <Route path="schedules" component={Schedules}/>
            <Route path="event" component={Calendar}/>
            <Route path="chat" component={ChatBoxCon}/>
            <Route path="register" component={Register} />
            <Route path="login" component={LoginCon} />
        </Route>
);

export default routes;