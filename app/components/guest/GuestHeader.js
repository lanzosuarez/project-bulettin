import React from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import GuestButton from './GuestButton';
import {white} from 'material-ui/styles/colors';

const GuestHeader = (props) => {
    const style = {
        height: "373px",
        width: "100%",
        display: 'inline-block'
    };

    return (
        <div>
            <div id="guestHeader">
                <div id="guestHd">
                    <div>
                        <div id="cpeLogo"><img id="cpeLg" src ="/images/1.png" /></div>
                        <p id="cpeSub">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                    </div>
                </div>            
            </div>
            {!props.admin?<AppBar id="guestBar"
                title= {<GuestButton />}
                iconElementRight={
                <div style={style.iconsRightContainer}>
                  <IconMenu color={white}
                            iconButtonElement={
                              <IconButton><MoreVertIcon color={white}/></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <MenuItem primaryText="Sign out"/>
                  </IconMenu>
                </div>
              }
            />:null}
         </div>
    );
};

export default GuestHeader;