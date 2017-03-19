import * as types from '../actions/ActionTypes';
import initialState from './initialState';

export default function socketReducer(state=initialState.socket, action){
    switch(action.type){
        case types.INITIALIZE_SOCKET_SUCCESS:
            return io();
        default:
            return state;
    }
};