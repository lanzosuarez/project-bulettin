import React, {PropTypes} from 'react';
import AuthApi from '../api/AuthApi';
import {connect} from 'react-redux';
import FormLogin from '../components/forms/FormLogin'
import swal from 'sweetalert';

class LoginCon extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: {
        username:'',
        password:''
      }
    }
    this.handleLogin = this.handleLogin.bind(this); 
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    AuthApi.onGetUser().then(res=>{
      if(res.data.response!==null){
        window.location="/dashboard";
      }
    });
  }

  handleChange(e){
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({user:user});
  }

  
  errorAlert(err){
    swal("Oooops!",err,"error")
  }

  redirect(){
     swal({
        title: "Authenticated",
        text: "Redirecting to dashboard...",
        timer: 3000,
        showConfirmButton: false
      });
  }

  handleErrors(errs){
    let errMsg="";
    Object.keys(errs).forEach(err=>{
      errMsg+=`- ${errs[err].message} \n`;
    }); 
    this.errorAlert(errMsg);
  }

  handleLogin(e){
    e.preventDefault();
    AuthApi.onLogin(this.state.user)
    .then(res=>{  
      if(res.data.success){
        this.redirect();
        window.location = "/dashboard";
        return;
      }
      this.errorAlert(res.data.response);
    }).catch(err=>{
      this.errorAlert(err);
      throw(err);
    });
  }


  render(){
    return(
      <div>
        <FormLogin onLogin={this.handleLogin}
                   onChange={this.handleChange}
        />
      </div>
    );
  }
}


export default LoginCon;