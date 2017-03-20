import axios from 'axios';

class EventApi {
  static onGetEvents() {
    return axios.get('/event').then(res => {
      return res;
    }).catch(err => {
      throw err;
    });
  }

}

export default EventApi