import * as types from '../actions/ActionTypes';
import initialState from './initialState';

export default function messageReducer(state=initialState.messages, action){
    switch(action.type){
        case types.LOAD_MESSAGES_SUCCESS:
            return action.messages
        case types.SAVE_MESSAGE_SUCCESS:
            return [...state,Object.assign({},action.message)];
        case types.RECEIVE_MESSAGE_SUCCESS:
            return [...state,Object.assign({},action.message)];
        case types.CLEAR_MESSAGES_SUCCESS:
            return [];
        default:
            return state;
    }
}