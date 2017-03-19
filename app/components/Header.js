import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ChatToggle from '../containers/ChatToggle';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import {white} from 'material-ui/styles/colors';
import AuthApi from '../api/AuthApi';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    console.log("hello");
    AuthApi.onLogout().then(res=>{
      window.location = res.data.redirect;
    }).catch(err=>{
      throw err;
      alert(err);
    });
  }

  render() {
    const {styles, handleChangeRequestNavDrawer} = this.props;

    const style = {   
      menuButton: {
        marginLeft: 10
      },
      iconsRightContainer: {
        marginLeft: 20
      }
    };

    return (
        <div>
            <AppBar id = "appbar"
              style={styles} 
              title={<ChatToggle/>}
              iconElementLeft={
                  <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
                    <Menu color={white} />
                  </IconButton>
              }
              iconElementRight={
                <div style={style.iconsRightContainer}>
                  <IconMenu color={white}
                            iconButtonElement={
                              <IconButton><MoreVertIcon color={white}/></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <MenuItem onItemTouchTap={this.handleLogout} primaryText="Sign out"/>
                  </IconMenu>
                </div>
              }
            />
          </div>
      );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func
};

export default Header;
