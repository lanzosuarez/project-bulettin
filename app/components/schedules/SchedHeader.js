import React, {PropTypes} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import BySection from './BySection';
import SearchBox from '../SearchBox';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';



const SchedHeader = (props)=>{
  const ddChange = (event, key, value)=>{
    console.log(value);
    props.updateInfoState(value,"year");
  };
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={props.defYearValue} onChange={ddChange}>
            <MenuItem value={1}  primaryText="1st Year" />
            <MenuItem value={2}  primaryText="2nd Year" />
            <MenuItem value={3}  primaryText="3rd Year" />
            <MenuItem value={4}  primaryText="4th Year" />
            <MenuItem value={5}  primaryText="5th Year" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Options" />
          <BySection updateState={props.updateState}/>
          <ToolbarSeparator />
          <SearchBox onSearch={props.onSearch}/>
        </ToolbarGroup>
      </Toolbar>
    );
  }

  SchedHeader.propTypes = {
    updateState: PropTypes.func.isRequired,
    defYearValue: PropTypes.number.isRequired,
    onSearch: PropTypes.func.isRequired
  };

export default SchedHeader;