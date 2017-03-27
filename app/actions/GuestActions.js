import * as types from './ActionTypes';

export function joinGuestSuccess(guest) {
    return { type: types.JOIN_GUEST_SUCCESS, guest };
};

