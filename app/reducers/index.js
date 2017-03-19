import {combineReducers} from 'redux';
import messages from './MessagesReducer';
import guests from './GuestReducer';
import socket from './SocketReducer';
import admin from './AdminReducer';

const rootReducer = combineReducers({
    messages,
    guests,
    socket,
    admin
});

export default rootReducer;