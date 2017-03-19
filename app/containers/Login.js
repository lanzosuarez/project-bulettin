import React, {PropTypes} from 'react';
import AuthApi from '../api/AuthApi';
import {connect} from 'react-redux';

class Login extends React.Component{
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

  handleErrors(errs){
    let errMsg="";
    Object.keys(errs).forEach(err=>{
      errMsg+=`- ${errs[err].message} \n`;
    }); 
    alert(errMsg);
  }

  handleLogin(e){
    e.preventDefault();
    AuthApi.onLogin(this.state.user)
    .then(res=>{
      if(res.data.success){
        alert("success");
        window.location = "/dashboard";
        return;
      }
      alert(res.data.response);
    }).catch(err=>{
      alert(err);
      throw(err);
    });
  }


  render(){
    return(
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
          <input type="text" name="username" onChange={this.handleChange}/>
          <input type="text" name="password" onChange={this.handleChange}/>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}


export default Login;