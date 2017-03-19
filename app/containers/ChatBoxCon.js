import React, { PropTypes } from 'react';
import ChatHeader from '../components/chat/ChatHeader';
import ChatItem from '../components/chat/ChatItem';
import ChatSend from '../components/chat/ChatSend';
import ChatBox from '../components/chat/ChatBox';
import Paper from 'material-ui/Paper';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as socketActions from '../actions/SocketActions';

class ChatBoxCon extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            infos:{
                message: "",
                nickname: "",
            },
            joined: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.handleJoin = this.handleJoin.bind(this);
    }
    
    componentWillMount(){
        if(this.getNickname()){
            let infos={};
            infos["nickname"] = this.getNickname();
            this.setState({
                infos:infos,joined:true
            });
            this.props.socketActions.emitJoinClient(this.getNickname());
        }
    }

    handleJoin(e){
        e.preventDefault();
        localStorage.setItem('nickname', this.state.infos.nickname);    
        this.props.socketActions.emitJoinClient(this.getNickname());
        this.setState({joined:true});
    }
    
    getNickname() {
        return localStorage.getItem('nickname');
    }

    handleSend(e) {
        e.preventDefault();
        this.props.socketActions.emitMessageFromUser(this.state.infos.message);
    }

    handleChange(e){
        let infos=this.state.infos;
        infos[e.target.name] = e.target.value;
        this.setState({infos:infos});
    }


    render(){
        const styles = {
            paper: {
            height: "100%",
            padding: 10
            }
        };
        if(!this.state.joined){
            return(
                <div>
                    <h2>Enter your twitter username or a nickname</h2>
                    <form onSubmit={this.handleJoin}>
                        <input type="text" name="nickname" onChange={this.handleChange}/>
                        <button>Join and Chat!</button>
                </form>
                </div>
            );
        }
        return(
        <div>
            <ChatBox >
                <ChatHeader />
                <ChatItem messages={this.props.messages}/>
                <ChatSend 
                    handleChange={this.handleChange}
                    handleSend={this.handleSend}
                />
            </ChatBox>
        </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        messages: state.messages,
        guests: state.guests,
    };
}

function mapDispatchToProps(dispatch){
    return {
        socketActions: bindActionCreators(socketActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoxCon);