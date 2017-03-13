import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import BySection from './BySection';
import SearchBox from '../SearchBox';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class SchedHeader extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: 3,
    };
  }

  handleChange(event, index, value){
    this.setState({value})
  };

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="1st Year" />
            <MenuItem value={2} primaryText="2nd Year" />
            <MenuItem value={3} primaryText="3rd Year" />
            <MenuItem value={4} primaryText="4th Year" />
            <MenuItem value={5} primaryText="5th Year" />
            <MenuItem value={6} primaryText="All" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
            <ToolbarTitle text="Options" />
              <BySection />
            <ToolbarSeparator />
            <SearchBox/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
export default SchedHeader;