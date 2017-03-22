import axios from 'axios';

class AuthApi {

  static onLogin(cred) {
    return axios.post('/auth/login', cred)
      .then((res) => {
        return res;
      }).catch((err) => {
        throw err;
      });
  }

  static onSignup(cred) {
    return axios.post('/auth/signup', cred)
      .then(res => {
        return res;
      }).catch(err => {
        throw err;
      });
  }

  static onGetUser() {
    return axios.get('/auth/getUser')
      .then(res => {
        return res;
      }).catch(err => {
        throw err;
      });
  }
  static onLogout(){
    return axios.post('/auth/logout')
    .then(res=>{
      window.location=res.data.redirect
    }).catch(err=>{
      throw err;
    });
  }
  static saveData(){
    return axios.get('/auth/save')
    .then(res=>{
      console.log(res)
    }).catch(err=>{
      throw err;
      console.log(err);
    })
  }
}

export default AuthApi;