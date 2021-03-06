import * as types from '../actions/ActionTypes';
import initialState from './initialState';

export default function adminReducer(state=initialState.admin, action){
  switch(action.type){
    case types.CHECKED_ADMIN_SUCCESS:
      return action.admin;
    default:
      return state;
  }
};