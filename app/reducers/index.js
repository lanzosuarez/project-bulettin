import {combineReducers} from 'redux';
import messages from './MessagesReducer';
import guests from './GuestReducer';
import socket from './SocketReducer';
import admin from './AdminReducer';
import schedules from './ScheduleReducer';

const rootReducer = combineReducers({
    messages,
    guests,
    socket,
    admin,
    schedules
});

export default rootReducer;