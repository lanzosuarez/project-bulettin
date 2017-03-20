import axios from 'axios';

class EventApi {
  static onGetEvents() {
    return axios.get('/event').then(res => {
      return res;
    }).catch(err => {
      throw err;
    });
  }
  static onAddEvent(event) {
    return axios.post('/event', event).then(res => {
      return res;
    }).catch(err => {
      throw err;
    });
  }
  static onDeleteEvent(id) {
    return axios.delete('/event/' + id).then(res=>{
      return res;
    }).catch(err=>{
      throw err;
    });
  }
}

export default EventApi