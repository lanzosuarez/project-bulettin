import React, { PropTypes } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

const ChatHeader = (props) => {
   const styles = {
      tool: {
        backgroundColor:"rgb(165, 164, 173)"
      },
      bg:{
        backgroundColor:"#a5a4ad",
        boxShadow:"none"
      },
      top:{
        top: "0px"
      }
    };

  return (
      <Toolbar style={styles.tool}>
        <ToolbarGroup >
          <Avatar src="/images/elyse.png" />
          <div>
            <h1 id="adName">Admin</h1>
            <i className={props.isOnline?"fa fa-circle online":"fa fa-circle offline"} id="isOnline"></i>
            <h1 id="adOl">{props.isOnline?"is Online":"is Offline"}</h1>
          </div>
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
           {props.admin?<RaisedButton label="Clear All" 
           style={styles.bg}
           buttonStyle={styles.top}
           secondary={true}
           onTouchTap={props.clear}
           />:null}
        </ToolbarGroup>
      </Toolbar>
  );
};

export default ChatHeader;
