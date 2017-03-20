import * as types from '../actions/ActionTypes';
import initialState from './initialState'

export default function scheduleReducer(state=initialState.schedules, action){
  switch(action.type){
    case types.LOAD_SCHEDULES_SUCCESS:
      return action.schedules;
    default:
      return state;
  }
};
