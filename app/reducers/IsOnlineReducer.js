import * as types from '../actions/ActionTypes';
import initialState from './initialState';

export default function isOnlineReducer(state=initialState.isOnline, action){
  switch(action.type){
    case types.ADMIN_ONLINE:
      return action.status;
    case types.ADMIN_OFFLINE:
      return actio.status;
    default:
      return state;
  }
};