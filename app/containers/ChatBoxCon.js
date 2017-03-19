import React, { PropTypes } from 'react';
import ChatHeader from '../components/chat/ChatHeader';
import ChatItem from '../components/chat/ChatItem';
import ChatSend from '../components/chat/ChatSend';
import ChatBox from '../components/chat/ChatBox';
import Paper from 'material-ui/Paper';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as socketActions from '../actions/SocketActions';

class ChatBoxCon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: this.props.admin,
            infos: {
                message: "",
                nickname: "",
            },
            joined: false,
            unreads:0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.handleJoin = this.handleJoin.bind(this);
        this.handleSeenMessages = this.handleSeenMessages.bind(this);
    }

    componentDidMount(){
        let n = this.getNickname();
        if(n){
            this.emitJoin(n);
        }
    }
 
    componentWillReceiveProps(nextProps) {
        if (this.props.admin != nextProps.admin) {
            this.setState({
                admin:Object.assign({},nextProps.admin),
                infos:{
                    nickname:"admin"
                },
                joined:true
            });
            this.props.socketActions.emitJoinClient("admin");
        }
    }

    emitJoin(n){
        localStorage.setItem('nickname', n);
        this.props.socketActions.emitJoinClient(this.getNickname());
        this.setState({ joined: true });
    }

    handleJoin(e) {
        e.preventDefault();
        this.emitJoin(this.state.infos.nickname);
    }

    getNickname() {
        return localStorage.getItem('nickname');
    }

    handleSend(e) {
        e.preventDefault();
        this.props.socketActions.emitMessageFromUser(this.state.infos.message);
    }

    handleChange(e) {
        let infos = this.state.infos;
        infos[e.target.name] = e.target.value;
        this.setState({ infos: infos });
    }

    handleSeenMessages(){
        this.props.socketActions.seenAll();
    }

    
    checkUnreads() {
        const adminMsgs = this.props.messages.filter(message => message.nickname !== this.infos.nickname);
        const unreads = adminMsgs.filter(message => message.seen === false);
        this.setState({unreads:unreads.length});
    }

    render() {    
        const styles = {
            paper: {
                height: "100%",
                padding: 10
            }
        };
        if (!this.state.joined) {
            return (
                <div>
                    <h2>Enter your twitter username or a nickname</h2>
                    <form onSubmit={this.handleJoin}>
                        <input type="text" name="nickname" onChange={this.handleChange} />
                        <button>Join and Chat!</button>
                    </form>
                </div>
            );
        }
        return (
            <div>
                <ChatBox >
                    <ChatHeader />
                    <ChatItem messages={this.props.messages} />
                    <ChatSend
                        handleSeenMessages={this.handleSeenMessages}
                        handleChange={this.handleChange}
                        handleSend={this.handleSend}
                    />
                </ChatBox>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        messages: state.messages,
        guests: state.guests,
        admin: state.admin
    };
}

function mapDispatchToProps(dispatch) {
    return {
        socketActions: bindActionCreators(socketActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoxCon);