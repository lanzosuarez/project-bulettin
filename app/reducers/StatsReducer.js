import * as types from '../actions/ActionTypes';
import initialState from './initialState';

export default function socketReducer(state = initialState.stats, action) {
  switch (action.type) {
    case types.LOAD_STATS_SUCCESS:
      return action.stats;
    default:
      return state;
  }
};