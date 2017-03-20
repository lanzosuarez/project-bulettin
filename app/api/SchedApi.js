import axios from 'axios';

class SchedApi {
  static getAllScheds() {
    return axios.get('/sched').then(res => {
      return res;
    }).catch(err => {
      throw err;
    });
  }

  static saveSched(schedule) {
    return axios.post('/sched', schedule).then(res => {
      return res;
    }).catch(err => {
      throw err;
    });
  }
}

export default SchedApi;