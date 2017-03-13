import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Sort from 'material-ui/svg-icons/content/sort';

/**
 * Example of nested menus within an IconMenu.
 */
const BySection = () => (
  <IconMenu
      iconButtonElement={<IconButton><Sort/></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
    >
      <MenuItem primaryText="Section 1" />
      <MenuItem primaryText="Section 2" />
      <MenuItem primaryText="Section 3" />
      <MenuItem primaryText="Section 4" />
      <MenuItem primaryText="Section 5" />
    </IconMenu>
);

export default BySection;