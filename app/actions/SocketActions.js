import * as types from './ActionTypes';
import * as messagesActions from '../actions/MessagesActions';
import * as guestActions from '../actions/GuestActions';

export function initializeSocketSuccess() {
    return { type: types.INITIALIZE_SOCKET_SUCCESS }
};

function adminOnline(status){
    return { type: types.ADMIN_ONLINE, status };
}

function adminOffline(status){
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
            console.log("on msg from server", message);
            dispatch(messagesActions.saveMessageSuccess(message));
        });
    };
};
// admin online listener
export function isAdminOnline(){
    return function (dispatch, getState){
        const { socket } = getState();
        socket.on('admin-online', status=>{
            dispatch(adminOnline(status));
        });
    }
}

//load all messages for newly joined user
export function onAllMessages() {
    return function (dispatch, getState) {
        const { socket } = getState();
        socket.on('all-messages', messages => {
            console.log("all-messages", messages);
            dispatch(messagesActions.loadMessagesSuccess(messages));
        });
    };
};

//message emitter
export function emitMessageFromUser(message) {
    return function (dispatch, getState) {
        const { socket } = getState();
        socket.emit('message-from-user', { message });
    };
};
//join emitter
export function emitJoinClient(nickname, password=null) {
    return function (dispatch, getState) {
        const { socket } = getState();
        socket.emit('join', {nickname,password});
    };
};

export function seenAll(){
    return function(dispatch, getState){
        const {socket} = getState();
        socket.emit('seen-all');
    };
}

export function clearAll(){
    return function(dispatch, getState){
        const {socket} = getState();
        socket.emit('clear');
    };
}

// export function adminLogout(){
//     return function(dispatch,getState){
//         console.log("logout on socket actions");
//         const {socket} = getState();
//         socket.emit('admin-logout');
//     }
// }




