import React, { PropTypes } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

const ChatHeader = (props) => {
   const styles = {
      tool: {
        backgroundColor:"rgb(165, 164, 173)"
      }
    };

  return (
      <Toolbar style={styles.tool}>
        <ToolbarGroup >
          <ToolbarTitle text="Options" />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
  );
};

export default ChatHeader;
