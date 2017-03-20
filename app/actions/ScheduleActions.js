import * as types from './ActionTypes';
import SchedApi from '../api/SchedApi';

function loadSchedsSuccess(schedules) {
  return { type: types.LOAD_SCHEDULES_SUCCESS, schedules };
}

export function loadScheds(){
  return function(dispatch){
    SchedApi.getAllScheds().then(res=>{
      console.log(res);
      dispatch(loadSchedsSuccess(res.data.response));
    }).catch(err=>{
      throw err;
    });
  }
};