import React from 'react';
import ReactRouter, { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from '../containers/App';
import DashboardPage from '../containers/DashboardPage';
import FormPage from '../containers/FormPage';

const routes = (
    <Router history={browserHistory} >
        <Route path="/" component={App}>
        <IndexRoute component={DashboardPage}/>
        <Route path="dashboard" component={DashboardPage}/>
        <Route path="form" component={FormPage}/>
        </Route>
    </Router>
);

export default routes;