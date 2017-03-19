import * as types from './ActionTypes';

export function saveMessageSuccess(message) {
    return { type: types.SAVE_MESSAGE_SUCCESS, message };
}

export function loadMessagesSuccess(messages) {
    return { type: types.LOAD_MESSAGES_SUCCESS, messages };
}

export function clearMessagesSucces() {
    return { type: types.LOAD_MESSAGES_SUCCESS };
}