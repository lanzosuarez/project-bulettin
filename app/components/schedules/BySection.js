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
const BySection = (props) => {
  const menuChange = (event, child)=>{
    props.updateState(child.props.value,"section");
  };
  return (
    <IconMenu
      onItemTouchTap={menuChange}
      iconButtonElement={<IconButton><Sort/></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
    >
      <MenuItem value={1} primaryText="Section 1" />
      <MenuItem value={2} primaryText="Section 2" />
      <MenuItem value={3} primaryText="Section 3" />
      <MenuItem value={4} primaryText="Section 4" />
      <MenuItem value={5} primaryText="Section 5" />
    </IconMenu>
  );
}

export default BySection;