import * as types from './ActionTypes';
import EventApi from '../api/EventApi';

function loadEventsSuccess(events) {
  return { type: types.LOAD_EVENTS_SUCCESS, events }
}

export function loadEvents() {
  return function (dispatch) {
    EventApi.onGetEvents().then(res => {
      if (res.data.success) {
        dispatch(loadEventsSuccess(res.data.response));
      }
    }).catch(err => {
      throw err;
    });
  }
};