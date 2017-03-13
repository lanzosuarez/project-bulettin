import React from 'react';
import ReactRouter, { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from '../containers/App';
import DashboardPage from '../containers/DashboardPage';
import FormPage from '../containers/FormPage';
import Schedules from '../containers/Schedules';
import Calendar from '../components/dashboard/Calendar';
import ChatBoxCon from '../containers/ChatBoxCon';

const routes = (
    <Router history={browserHistory} >
        <Route path="/" component={App}>
        <IndexRoute component={DashboardPage}/>
        <Route path="dashboard" component={DashboardPage}/>
        <Route path="form" component={FormPage}/>
        <Route path="schedules" component={Schedules}/>
        <Route path="event" component={Calendar}/>
        <Route path="chat" component={ChatBoxCon}/>
        </Route>
    </Router>
);

export default routes;