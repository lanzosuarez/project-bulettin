import * as types from '../actions/ActionTypes';
import initialState from './initialState'

export default function scheduleReducer(state = initialState.schedules, action) {
  switch (action.type) {
    case types.LOAD_SCHEDULES_SUCCESS:
      return action.schedules;
    case types.SAVE_SCHEDULE_SUCCESS:
      return [...state, Object.assign({}, action.schedule)];
    case types.UPDATE_SCHEDULE_SUCCESS:
      console.log("update", action);
      return [
        ...state.filter(sched => sched._id !== action.schedule._id),
        Object.assign({}, action.schedule)
      ];
    case types.DELETE_SCHEDULE_SUCCESS:
      return [...state.filter(sched => sched._id !== action.schedule._id)];
    default:
      return state;
  }
};
