import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as socketActions from '../actions/SocketActions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            nickname: "",
        };

        this.setMessageState = this.setMessageState.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    componentWillMount() {
        localStorage.removeItem('nickname');
        this.handleInitialConnect();
    }

    handleInitialConnect() {
        if (!this.getNickname()) {
            let name = prompt("Enter your nickname");
            localStorage.setItem('nickname', name);
            this.setState({
                nickname: this.getNickname(),
                initialConnect: false
            });
        } else {
            this.setState({ nickname: this.getNickname() });
        }
        this.props.socketActions.emitJoinClient(this.getNickname());
    }

    componentWillUnmount() {
        localStorage.removeItem('nickname');
    }

    getNickname() {
        return localStorage.getItem('nickname');
    }

    handleSend(e) {
        e.preventDefault();
        this.props.socketActions.emitMessageFromUser(this.state.infos.message);
    }

    setMessageState(e) {
        this.setState({ message: e.target.value });
    }

    render() {
        let g = this.props.guests.filter(guest=>{
            return guest.nickname !== this.state.nickname;
        });
        console.log("messages", this.props.messages);
        console.log("guests", this.props.guests);
        return (
            <div>
                <b>Welcome {this.state.nickname}</b><br/>
                <b>No. of guests {this.props.guests.length}</b>
                <b>Other guests</b>
                <br/>
                {g.map(g=>
                    <p>{g.nickname}</p>    
                )}
                <hr />
                <form onSubmit={this.handleSend}>
                    <input type="text" onChange={this.setMessageState} />
                    <input type="submit" />
                </form>
                {this.props.messages.map(message =>
                    <p>{message.nickname}: {message.message}</p>
                )}
                {this.props.children}
            </div>
        );
    }
}

function maptStateToProps(state, ownProps) {
    return {
        messages: state.messages,
        guests: state.guests,
        socket: state.socket
    };
}

function mapDispatchToProps(dispatch) {
    return {
        socketActions: bindActionCreators(socketActions, dispatch)
    };
}

App.propTypes = {
    messages: PropTypes.array.isRequired,
    socketActions: PropTypes.object.isRequired
};


export default connect(maptStateToProps, mapDispatchToProps)(App);