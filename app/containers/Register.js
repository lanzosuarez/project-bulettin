import React, {PropTypes} from 'react';
import AuthApi from '../api/AuthApi';


class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: {
        username:'',
        password:''
      }
    }
    this.handleRegister = this.handleRegister.bind(this); 
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e){
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({user:user});
  }

  handleErrors(errs){
    let errMsg="";
    Object.keys(errs).forEach(err=>{
      console.log(errs[err].message);
      errMsg+=`- ${errs[err].message} \n`;
    }); 
    alert(errMsg);
  }

  handleRegister(e){
    e.preventDefault();
    AuthApi.onSignup(this.state.user).then(res=>{
      console.log(res);
      if(!res.data.success){
        if(res.data.response.errors){
          this.handleErrors(res.data.response.errors);
          return;
        }
        alert(res.data.response.message);
        return;
      }
      window.location = "/login";
    }).catch(err=>{
      alert(err);
      throw(err);
    });
  }

  render(){
    console.log(this.state.user);
    return(
      <form onSubmit={this.handleRegister}>
        <input type="text" name="username" onChange={this.handleChange}/>
        <input type="text" name="password" onChange={this.handleChange}/>
        <input type="submit" value="Signup" />
      </form>
    );
  }
}

export default Register;