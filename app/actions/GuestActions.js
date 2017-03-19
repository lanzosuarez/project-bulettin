import * as types from './ActionTypes';

export function joinGuestSuccess(guest) {
    return { type: types.JOIN_GUEST_SUCCESS, guest };
};

export function loadGuestsSuccess(guests){
    return { type: types.LOAD_GUESTS_SUCCESS, guests };
};
