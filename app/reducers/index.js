import {combineReducers} from 'redux';
import messages from './MessagesReducer';
import guests from './GuestReducer';
import socket from './SocketReducer';
import admin from './AdminReducer';
import schedules from './ScheduleReducer';
import events from './EventReducer';
import announcements from './AnnouncementReducer';

const rootReducer = combineReducers({
    messages,
    guests,
    socket,
    admin,
    schedules,
    events,
    announcements
});

export default rootReducer;