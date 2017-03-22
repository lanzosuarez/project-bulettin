import * as types from './ActionTypes';
import SchedApi from '../api/SchedApi';

function loadSchedsSuccess(schedules) {
  return { type: types.LOAD_SCHEDULES_SUCCESS, schedules };
}

export function saveSchedSuccess(schedule) {
  return { type: types.SAVE_SCHEDULE_SUCCESS, schedule };
}

export function updateSchedSuccess(schedule){
  return { type: types.UPDATE_SCHEDULE_SUCCESS, schedule };
}

export function deleteSchedSuccess(schedule){
  return { type: types.DELETE_SCHEDULE_SUCCESS, schedule };
}



export function loadScheds() {
  return function (dispatch) {
    SchedApi.getAllScheds().then(res => {
      console.log(res);
      if (res.data.success) {
        console.log("on loadScheds", res.data.response);
        dispatch(loadSchedsSuccess(res.data.response));
      }
    }).catch(err => {
      throw err;
    });
  }
};


export function saveSched(schedule) {
  return function (dispatch) {
    return SchedApi.saveSched(schedule).then(res => {
      return res;
    }).catch(err => {
      alert(err);
      throw err;
    });
  }

}

export function deleteEvent(id) {
  return function (dispatch) {
    return SchedApi.onDeleteEvent(id).then(res => {
      return res;
    }).catch(err => {
      throw err;
    });
  }
}
