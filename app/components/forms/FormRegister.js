import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import {grey500, white} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';
import ThemeDefault from '../../theme-default';

const FormRegister = (props) => {

  const styles = {
    loginContainer: {
      minWidth: 320,
      maxWidth: 400,
      height: 'auto',
      margin: 'auto',
      position: "relative",
      top:" 144px",
    },
    paper: {
      padding: 20,
      overflow: 'auto'
    },
    buttonsDiv: {
      textAlign: 'center',
      padding: 10
    },
    flatButton: {
      color: grey500
    },
    checkRemember: {
      style: {
        float: 'left',
        maxWidth: 180,
        paddingTop: 5
      },
      labelStyle: {
        color: grey500
      },
      iconStyle: {
        color: grey500,
        borderColor: grey500,
        fill: grey500
      }
    },
    loginBtn: {
      float: 'right'
    },
    btn: {
      background: '#4f81e9',
      color: white,
      padding: 7,
      borderRadius: 2,
      margin: 2,
      fontSize: 13
    },
    btnFacebook: {
      background: '#4f81e9'
    },
    btnGoogle: {
      background: '#e14441'
    },
    btnSpan: {
      marginLeft: 5
    },
  };

  return (
    <MuiThemeProvider muiTheme={ThemeDefault}>
      <div>
        <div style={styles.loginContainer}>

          <Paper style={styles.paper}>
            <div id="cpeLogo2"><img id="nickLg" src ="/images/1.png" /></div>
            <form onSubmit={props.onRegister}>
              <TextField
                hintText="E-mail"
                floatingLabelText="E-mail"
                fullWidth={true}
                name="username"
                onChange={props.onChange}
              />
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                fullWidth={true}
                type="password"
                name="password"
                onChange={props.onChange}
              />

              <div>
                <FlatButton label="Register"
                              primary={true}
                              style={styles.loginBtn}
                              type="submit"/>
              </div>
            </form>
          </Paper>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

FormRegister.propTypes={
    onRegister: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default FormRegister;
