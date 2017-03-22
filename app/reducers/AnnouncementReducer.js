import * as types from '../actions/ActionTypes';
import initialState from './initialState'

export default function announcementReducer(state = initialState.announcements, action) {
  switch (action.type) {
    case types.LOAD_ANNOUNCEMENTS_SUCCESS:
      return action.announcements;
    case types.SAVE_ANNOUNCEMENT_SUCCESS:
      return [...state, Object.assign({}, action.announcement)];
    case types.UPDATE_ANNOUNCEMENT_SUCCESS:
      return [
        ...state.filter(announcement => announcement._id !== action.announcement._id),
        Object.assign({}, action.announcement)
      ];
    case types.DELETE_ANNOUNCEMENT_SUCCESS:
      return [...state.filter(announcement=>announcement._id !== action.id)];
    default:
      return state;
  }
};
