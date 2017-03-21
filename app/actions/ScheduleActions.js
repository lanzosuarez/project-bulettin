import * as types from './ActionTypes';
import SchedApi from '../api/SchedApi';

function loadSchedsSuccess(schedules) {
  return { type: types.LOAD_SCHEDULES_SUCCESS, schedules };
}

function saveSchedSuccess(schedule) {
  return { type: types.SAVE_SCHEDULE_SUCCESS, schedule }
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

function findIndex(scheds, toFind) {
  let index;
  for (var x = 0; x < scheds.length; x++) {
    if (scheds[x]._id == toFind) {
      index = x;
      break;
    }
  }
  return index;
}

export function saveSched(schedule) {
  return function (dispatch, getState) {
    let { schedules } = getState();
    SchedApi.saveSched(schedule).then(res => {
      if (res.data.success) {
        let i = [...schedules];
        let index = findIndex(i, res.data.response._id);
        i.splice(index, 1, res.data.response);
        dispatch(loadScheds(i));
      }
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
