import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {white, blue600} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity'
import AuthApi from '../api/AuthApi';
import swal from 'sweetalert';


const redirect = ()=>{
    swal({
        title: "Logging out",
        text: "Redirecting to guest viewww...",
        timer: 4000,
        showConfirmButton: false
      });
  }

const logout = ()=>{
  redirect();
  AuthApi.onLogout();
}

const LeftDrawer = (props) => {
  let { navDrawerOpen } = props;
  const styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 22,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: "#212121",
      paddingLeft: 40,
      height: 56,
    },
    menuItem: {
      color: white,
      fontSize: 14
    },
  };

  return (
    <Drawer
      docked={true}
      open={navDrawerOpen}>
        <div style={styles.logo}>
          CpE Bulletin
        </div>
        <div>
          {props.menus.map((menu, index) =>
            <MenuItem
              key={index}
              style={styles.menuItem}
              primaryText={menu.text}
              leftIcon={menu.icon}
              containerElement={<Link to={menu.link}/>}
            />
          )}
          <MenuItem
              onTouchTap={()=>{
                props.socket.emit('admin-logout');
                logout();
              }}
              style={styles.menuItem}
              primaryText="Sign Out"
              leftIcon={<PermIdentity/>}
            />
        </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
};

export default LeftDrawer;
