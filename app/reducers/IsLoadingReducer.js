import * as types from '../actions/ActionTypes';
import initialState from './initialState';

export default function isOnlineReducer(state = initialState.isLoading, action) {
  switch (action.type) {
    case types.ISLOADING:
      return action.flag;
    default:
      return state;
  }
};