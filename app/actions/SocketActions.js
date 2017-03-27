import * as types from './ActionTypes';
import * as messagesActions from '../actions/MessagesActions';
import * as guestActions from '../actions/GuestActions';
import * as statsActions from '../actions/StatsActions';
import AuthApi from '../api/AuthApi';

export function initializeSocketSuccess() {
    return { type: types.INITIALIZE_SOCKET_SUCCESS }
};

function adminOnline(status) {
    return { type: types.ADMIN_ONLINE, status };
}

function adminOffline(status) {
    return { type: types.ADMIN_OFFLINE, status };
}

//open socket
export function initializeSocket() {
    return function (dispatch) {
        dispatch(initializeSocketSuccess());
    };
};


//load all user listener
export function onAllUser() {
    return function (dispatch, getState) {
        const { socket } = getState();
        socket.on('all-users', guests => {
            dispatch(guestActions.loadGuestsSuccess(guests));
        });
    };
};
//message from server listener
export function onMessageFromServer() {
    return function (dispatch, getState) {
        const { socket } = getState();
        socket.on('message-from-server', message => {
            dispatch(messagesActions.saveMessageSuccess(message));
        });
    };
};
// admin online listener
export function isAdminOnline() {
    return function (dispatch, getState) {
        const { socket } = getState();
        socket.on('admin-online', status => {
            dispatch(adminOnline(status));
        });
    }
}

//load all messages for newly joined user
export function onAllMessages() {
    return function (dispatch, getState) {
        const { socket } = getState();
        socket.on('all-messages', messages => {
            dispatch(messagesActions.loadMessagesSuccess(messages));
        });
    };
};

//stats listener

export function onLoadStats() {
    return function (dispatch, getState) {
        const { socket } = getState();
        socket.on('stats', stats => {
            dispatch(statsActions.loadStatsSuccess(stats));
        });
    };
}

//message emitter
export function emitMessageFromUser(message, url) {
    return function (dispatch, getState) {
        const { socket } = getState();
        socket.emit('message-from-user', { message, url });
    };
};
//join emitter
export function emitJoinClient(nickname, password = null) {
    return function (dispatch, getState) {
        const { socket } = getState();
        socket.emit('join', { nickname, password });
    };
};

export function seenAll() {
    return function (dispatch, getState) {
        const { socket } = getState();
        socket.emit('seen-all');
    };
}

export function clearAll() {
    return function (dispatch, getState) {
        const { socket } = getState();
        socket.emit('clear');
    };
}





