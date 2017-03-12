import React, { PropTypes } from 'react';
import ChatHeader from '../components/chat/ChatHeader';
import ChatItem from '../components/chat/ChatItem';
import ChatSend from '../components/chat/ChatSend';
import ChatBox from '../components/chat/ChatBox';
import Paper from 'material-ui/Paper';

class ChatBoxCon extends React.Component {
    render(){
        const styles = {
            paper: {
            height: "100%",
            padding: 10
            }
        };
        return(
        <div>
            <ChatBox >
                <ChatHeader />
                <ChatItem />
                <ChatSend />
            </ChatBox>
        </div>
        );
    }
}


export default ChatBoxCon;