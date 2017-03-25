import React, { PropTypes } from 'react';
import ChatHeader from '../components/chat/ChatHeader';
import ChatItem from '../components/chat/ChatItem';
import ChatSend from '../components/chat/ChatSend';
import ChatBox from '../components/chat/ChatBox';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Loading from '../components/Loading';
import AuthApi from '../api/AuthApi';

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
                image_url:""
            },
            joined: false,
            unreads: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.handleGuestJoin = this.handleGuestJoin.bind(this);
        this.handleSeenMessages = this.handleSeenMessages.bind(this);
        this.clear = this.clear.bind(this);
    }

    componentDidMount() {
        let n = this.getNickname();
        if (n!=="") {
            this.getTwitter();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.admin != nextProps.admin) {
            this.setState({
                admin: Object.assign({}, nextProps.admin),
                infos: {
                    nickname: "admin"
                },
                joined: true
            });
            this.props.socketActions.emitJoinClient("admin", "d887d8s7ds8");
        }
    }

    emitJoin(n) {
        localStorage.setItem('nickname', n);
        this.props.socketActions.emitJoinClient(this.getNickname());
        this.setState({ joined: true });
    }

    handleGuestJoin(e) {
        e.preventDefault();
        if (this.state.infos.nickname === "admin") {
            alert("Please try another nickname");
        } else {
            this.getTwitter();
        }
    }

    getTwitter(){
        AuthApi.getTwitterUser(this.state.infos.nickname).then(res=>{
            console.log(res);
            if(res.data.success){
                let l = this.state.infos;
                l["image_url"] = res.data.response.profile_image_url
                this.setState({infos:l});
                this.emitJoin(this.state.infos.nickname);
                return true;
            }
            this.emitJoin(this.state.infos.nickname);
            return false
                 
        }).catch(err=>{
            alert(err);
            throw err;
        });
    }


    getNickname() {
        let l  = localStorage.getItem('nickname')
        return l;
    }

    handleSend(e) {
        e.preventDefault();
        console.log(e.target.reset());
        this.props.socketActions.emitMessageFromUser(this.state.infos.message,this.state.infos.image_url);
    }

    handleChange(e) {
        let infos = this.state.infos;
        infos[e.target.name] = e.target.value;
        this.setState({ infos: infos });
    }

    handleSeenMessages() {
        this.props.socketActions.seenAll();
    }


    checkUnreads() {
        const adminMsgs = this.props.messages.filter(message => message.nickname !== this.infos.nickname);
        const unreads = adminMsgs.filter(message => message.seen === false);
        this.setState({ unreads: unreads.length });
    }

    clear() {
        this.props.socketActions.clearAll();
    }


    render() {
        console.log(this.state);
        const styles = {
            paper: {
                height: "100%",
                padding: 10
            },
            nick: {
                maxWidth: "309px",
                padding: "27px",
                margin: "157px 0px 0px 47px",
                color: "rgb(255, 255, 255) !important",
                backgroundColor: "rgb(127, 126, 138) !important"
            },
            nickSubmit: {
                backgroundColor: " #525154",
                boxShadow: "none !important",
            },
            float: {
                color: "white"
            },
            input: {
                color: "rgb(199, 199, 199)"
            }
        };
        if (!this.state.joined) {
            return (
                <Paper style={styles.nick} zDepth={2} className="nickPaper">
                    <form onSubmit={this.handleGuestJoin}>
                        <div id="cpeLogo"><img id="nickLg" src="/images/1.png" /></div>
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
                                buttonStyle={styles.float}
                                fullWidth={true} />
                        </div>
                    </form>
                </Paper>
            );
        }
        if (this.props.isLoading) {
            return <Loading />
        } else {
            return (
                <div>
                    <ChatBox >
                        <ChatHeader
                            clear={this.clear}
                            admin={this.props.admin}
                            isOnline={this.props.isOnline} />
                        <ChatItem messages={this.props.messages}/>
                        <ChatSend
                            isOnline={this.props.isOnline}
                            handleSeenMessages={this.handleSeenMessages}
                            handleChange={this.handleChange}
                            handleSend={this.handleSend}
                        />
                    </ChatBox>
                </div>
            );
        }

    }
}

function mapStateToProps(state, ownProps) {
    return {
        messages: state.messages,
        guests: state.guests,
        admin: state.admin,
        isOnline: state.isOnline
    };
}

function mapDispatchToProps(dispatch) {
    return {
        socketActions: bindActionCreators(socketActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoxCon);