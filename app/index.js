import React from 'react';
import { render } from 'react-dom';
import routes from './config/routes';
import './styles/styles.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'flexboxgrid/css/flexboxgrid.css';
import configureStore from './store/ConfigureStore';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { initializeSocket, onMessageFromServer, onAllUser, onAllMessages, isAdminOnline, onLoadStats } from './actions/SocketActions';
import { loadScheds } from './actions/ScheduleActions';
import { loadEvents } from './actions/EventActions';
import { loadAnnouncements } from './actions/AnnouncementActions';
import '../node_modules/sweetalert/dist/sweetalert.css';
import '../node_modules/sweetalert/dist/sweetalert.min.js';

injectTapEventPlugin();
const store = configureStore();
//dispatch socket actions
store.dispatch(initializeSocket()); //initialize socket
store.dispatch(onAllUser()); //listener for  all users event
store.dispatch(isAdminOnline());//listens if admin is online
store.dispatch(onMessageFromServer()); //initialize listener for messages from server
store.dispatch(onAllMessages()); //listener for all messages event
store.dispatch(loadScheds())//load schedules
store.dispatch(loadEvents());//load events
store.dispatch(loadAnnouncements());//load loadAnnouncements
store.dispatch(onLoadStats());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);