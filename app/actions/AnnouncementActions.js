import * as types from './ActionTypes';
import AnnouncementApi from '../api/AnnouncementApi';

function loadAnnouncementsSuccess(announcements) {
  return { type: types.LOAD_ANNOUNCEMENTS_SUCCESS, announcements };
}

export function saveAnnouncementSuccess(announcement){
  return { type: types.SAVE_ANNOUNCEMENT_SUCCESS, announcement}
}
export function loadAnnouncements() {
  return function (dispatch) {
    AnnouncementApi.onGetAll().then(res => {
      console.log(res);
      if (res.data.success) {
        dispatch(loadAnnouncementsSuccess(res.data.response));
        return;
      }
      console.log(res.data.response);
    }).catch(err => {
      throw err;
    });
  }
};

export function saveAnnouncement(announcement){
  return function (dispatch){
    return AnnouncementApi.onSave(announcement).then(res=>{
      return res;
      console.log(res.data.response);
    }).catch(err=>{
      throw err;
    });
  }
}

