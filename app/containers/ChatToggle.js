import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import ChatBoxCon from './ChatBoxCon';
import Badge from 'material-ui/Badge';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import {seenAll} from '../actions/SocketActions';

class ChatToggle extends React.Component {

  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = { open: false, access: false };
    this.checkUnreads = this.checkUnreads.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.admin != nextProps.admin) {
      this.setState({access:true});
    }
  }

  checkUnreads() {
    let msgs;
    if(this.props.admin){
      msgs = this.props.messages.filter(msg=>msg.nickname!=="admin");
    } else {
      msgs = this.props.messages.filter(msg=>msg.nickname!==localStorage.getItem('nickname'));
    }
    const unreads = msgs.filter(message => message.seen === false);
    return unreads.length;
  }

  handleToggle() {
    if(this.state.access===true){
      if(!this.state.open===true){
        this.props.dispatch(seenAll());
      }
    }
    this.setState({ open: !this.state.open });
  };

  render() {
    let s1 = { backgroundColor: "rgb(16, 14, 31)"};
    let s2 = { top: "-23px!important", right: "7px!important" }
    let s3 = { backgroundColor: "rgb(43, 40, 56)", border: "1px solid white", width:"130px"}

    //let badge = null;
    // if(this.state.access){
    let badge = <Badge
        badgeContent={this.checkUnreads()}
        primary={true}
        style={s2}
        />
    // }

    return (
      <div>
        <RaisedButton
          label={<div><p id="pToggle">Chat Me</p><i className={this.props.isOnline?"fa fa-circle online":"fa fa-circle offline"} id="indicatorOnline"></i></div>}
          onTouchTap={this.handleToggle}
          buttonStyle={s3}
          labelColor={"white"}
          backgroundColor="rgb(165, 164, 173)"
          style={s1}
        />
        {badge}
        <Drawer width={400} openSecondary={true} open={this.state.open}>
          <ChatBoxCon />
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    messages: state.messages,
    admin: state.admin,
    isOnline: state.isOnline

  };
}

export default connect(mapStateToProps)(ChatToggle);