import React, { PropTypes } from 'react';
import ChatHeader from '../components/chat/ChatHeader';
import ChatItem from '../components/chat/ChatItem';
import ChatSend from '../components/chat/ChatSend';
import ChatBox from '../components/chat/ChatBox';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
            },
            nick:{
                maxWidth: "309px",
                padding: "27px",
                margin: "157px 0px 0px 47px",
                color: "rgb(255, 255, 255) !important",
                backgroundColor: "rgb(127, 126, 138) !important"
            },
            nickSubmit:{
               backgroundColor:" #525154",
               boxShadow:"none !important",
            },
            float:{
                color:"white"
            },
            input:{
                color:"rgb(199, 199, 199)"
            }
        };
        if (!this.state.joined) {
            return (
                <Paper style={styles.nick} zDepth={2} className="nickPaper">
                    <form onSubmit={this.handleJoin}>
                        <div id="cpeLogo"><img id="nickLg" src ="/images/1.png" /></div>
                        <h2 id="nickh2">Enter your twitter username or a nickname</h2>
                        <TextField
                            hintText="Your Nickname"
                            floatingLabelText="Nickname"
                            name="nickname"
                            fullWidth={true}
                            onChange={this.handleChange}
                            underlineShow={false}
                            className="nickText"
                            floatingLabelStyle={styles.float}
                            inputStyle={styles.input}
                            />
                        <div>
                        <RaisedButton label="Submit"
                            type="submit"
                            style={styles.nickSubmit}
                            labelColor={"white"}
                            backgroundColor={"#2b2838"}
                            buttonSyle={styles.float}
                            fullWidth={true}/>
                        </div>
                    </form>
                </Paper>
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