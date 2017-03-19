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
}

export default AuthApi;