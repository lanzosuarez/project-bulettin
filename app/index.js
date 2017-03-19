import React from 'react';
import { render } from 'react-dom';
import routes from './config/routes';
import './styles/styles.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'flexboxgrid/css/flexboxgrid.css';
import configureStore from './store/ConfigureStore';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { initializeSocket, onMessageFromServer, onAllUser, onAllMessages } from './actions/SocketActions';

injectTapEventPlugin();
const store = configureStore();
//dispatch socket actions
store.dispatch(initializeSocket()); //initialize socket
store.dispatch(onAllUser()); 
store.dispatch(onMessageFromServer());
store.dispatch(onAllMessages());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);