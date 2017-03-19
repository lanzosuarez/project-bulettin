import * as types from '../actions/ActionTypes';
import initialState from './initialState';

export default function guestReducer(state = initialState.guests, action) {
    switch (action.type) {
        case types.JOIN_GUEST_SUCCESS:
            return [...state, Object.assign({}, action.guest)];
        case types.LOAD_GUESTS_SUCCESS:
            return action.guests;
        default:
            return state;
    }
};
