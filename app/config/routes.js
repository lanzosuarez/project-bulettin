import React from 'react';
import ReactRouter, { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from '../components/App';

const routes = (
    <Router history={browserHistory} >
        <Route path="/" component={App}>
        </Route>
    </Router>
);

export default routes;