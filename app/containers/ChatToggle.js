import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import ChatBoxCon from './ChatBoxCon';

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
    return (
      <div>
        <RaisedButton
          label="Chat Me"
          onTouchTap={this.handleToggle}
          backgroundColor="#757575"
          width={100}
        />
        <Drawer width={400} openSecondary={true} open={this.state.open}>
          <ChatBoxCon />
        </Drawer>
      </div>
    );
  }
}

export default ChatToggle;