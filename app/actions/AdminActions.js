import * as types from './ActionTypes';
import AuthApi from '../api/AuthApi';

function checkedAdminSuccess(admin) {
  return { type: types.CHECKED_ADMIN_SUCCESS, admin }
}

export function checkAdmin() {
  return function (dispatch) {
    return AuthApi.onGetUser().then(res => {
      if (res.data.response === null) {
        window.location = "/login";
      } else {
        let r = Object.assign({}, res.data.response)
        dispatch(checkedAdminSuccess(r));
      }
    }).catch(err => {
      throw err;
      alert(err);
    });
  }
}

export function checkAdminAccess(){
  return function(dispatch){
    return AuthApi.onGetUser().then(res => {
      if (res.data.response!==null) {
        let r = Object.assign({}, res.data.response)
        dispatch(checkedAdminSuccess(r));
      }
    }).catch(err => {
      throw err;
      alert(err);
    });
  }
}
