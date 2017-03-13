import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import ChatBoxCon from './ChatBoxCon';
import Badge from 'material-ui/Badge';

class ChatToggle extends React.Component {

  constructor(props) {
    super(props);
      this.handleToggle = this.handleToggle.bind(this);
      this.state = {open: false};
  }

    handleToggle() {
      this.setState({open: !this.state.open})
    };

  render() {
    let s1 ={backgroundColor:"rgb(43, 40, 56)"};
    let s2 = {top: "-23px!important", right:"7px!important"}
    return (
      <div>
          <RaisedButton
            label="Chat Me"
            onTouchTap={this.handleToggle}
            backgroundColor="rgb(165, 164, 173)"
            width={100}
            style={s1}
          />
          <Badge
            badgeContent={4}
            primary={true}
            style={s2}
          />
        <Drawer width={400} openSecondary={true} open={this.state.open}>
          <ChatBoxCon />
        </Drawer>
      </div>
    );
  }
}

export default ChatToggle;