import * as types from './ActionTypes';
import EventApi from '../api/EventApi';
import { browserHistory } from 'react-dom';

function loadEventsSuccess(events) {
  return { type: types.LOAD_EVENTS_SUCCESS, events }
}

export function saveEventSuccess(event) {
  return { type: types.SAVE_EVENT_SUCCESS, event }
}

export function updateEventSuccess(event) {
  return { type: types.UPDATE_EVENT_SUCCESS, event }
}

export function deleteEventSuccess(event) {
  return { type: types.DELETE_EVENT_SUCCESS, event }
}

export function loadEvents() {
  return function (dispatch) {
    EventApi.onGetEvents().then(res => {
      if (res.data.success) {
        console.log(res.data);
        dispatch(loadEventsSuccess(res.data.response));
        return;
      }
      alert(res.data.response)
    }).catch(err => {
      throw err;
    });
  }
};

export function saveEvent(event) {
  return function (dispatch) {
    return EventApi.onAddEvent(event).then(res => {
      return res;
    }).catch(err => {
      throw err;
    });
  }
}

export function deleteEvent(id) {
  return function (dispatch) {
    return EventApi.onDeleteEvent(id).then(res => {
      return res;
    }).catch(err => {
      throw err;
    });
  }
}

