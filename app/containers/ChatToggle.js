import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import ChatBoxCon from './ChatBoxCon';
import Badge from 'material-ui/Badge';
import { connect } from 'react-redux';
import {isEmpty} from 'lodash';

class ChatToggle extends React.Component {

  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = { open: false, access: false };
    this.checkUnreads = this.checkUnreads.bind(this);
  }
  
  componentWillMount(){
    if(!isEmpty(this.props.admin)){
      this.setState({access:true});
    }
  }

  checkUnreads(){
    const unreads=this.props.messages.filter(message=>message.seen===false);
    return unreads.length;
  }

  handleToggle() {
    this.setState({ open: !this.state.open })
  };

  render() {
    let s1 = { backgroundColor: "#100e1f" };
    let s2 = { top: "-23px!important", right: "7px!important" }
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
          badgeContent={this.checkUnreads()}
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

function mapStateToProps(state, ownProps){
  return {
    messages: state.messages,
    admin: state.admin,

  };
}

export default connect(mapStateToProps)(ChatToggle);