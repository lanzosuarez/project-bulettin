import React, {PropTypes} from 'react';
import AuthApi from '../api/AuthApi';
import FormRegister from '../components/forms/FormRegister';
import {connect} from 'react-redux';
import {bindActionCreators} from 'react-redux';
import * as adminActions from '../actions/AdminActions'
import swal from 'sweetalert';


class RegisterCon extends React.Component{
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

  componentDidMount() {
    this.props.dispatch(adminActions.checkAdmin());
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
    swal("Oooops!",errMsg,"error");
  }

  redirectAlert(){
    swal({
      title: "You've been registered",
      text: "Redirecting to login page...",
      timer: 3000,
      showConfirmButton: false
    });
  }

  errorAlert(err){
    swal("Oooops!",err,"error")
  }

  handleRegister(e){
    if(this.state.password<6){
      this.errorAlert("Password is too short");
      return;
    }
    e.preventDefault();
    AuthApi.onSignup(this.state.user).then(res=>{
      if(!res.data.success){
        if(res.data.response.errors){
          this.handleErrors(res.data.response.errors);
          return;
        }
        this.errorAlert(res.data.response.message);
        return;
      }
      this.redirectAlert();
      window.location = "/login";
    }).catch(err=>{
      this.errorAlert(err);
      throw err;
    });
  }

  render(){
    return(
       <FormRegister onRegister={this.handleRegister}
                   onChange={this.handleChange}
        />
    );
  }
}

export default connect()(RegisterCon);