import axios from 'axios';

class AnnouncementApi{

  static onGetAll(){
    return axios.get('/announcement').then(res=>{
      return res;
    }).catch(err=>{
      throw err;
    });
  }

  static onSave(announcement){
    return axios.post('/announcement',announcement).then(res=>{
      return res;
    }).catch(err=>{
      throw err;
    });
  }

  static onDelete(id){
    return axios.delete('/announcement/'+id).then(res=>{
      return res;
    }).catch(err=>{
      throw err;
    })
  }
}

export default AnnouncementApi