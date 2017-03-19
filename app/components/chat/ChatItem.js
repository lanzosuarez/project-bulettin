import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Dp from 'material-ui/svg-icons/action/perm-identity';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';



const loopTruMsgs = (messages)=>{
    const styles = {
        bubble:{
            fill:"rgb(0, 151, 167)"
        },
        chat:{
            overflow: "initial",
            "whiteSpace": "initial"
        }
    };
    return messages.map((msg)=>{
        return <div   style={styles.chat}>
            <ListItem
                leftAvatar={<Avatar>A</Avatar>}
                rightIcon={<CommunicationChatBubble style={styles.bubble} />}
                secondaryTextLines={2}
                >
                <div>
                    <div id={styles.chat}>
                        <p>{msg.nickname}</p>
                        <p style={{wordBreak:"break-all"}}>{msg.message}</p>
                    </div>
                </div>
            </ListItem>
            <Divider inset={true} />  
        </div>
    });
    
};

const ChatItem = (props) => {
  return (
    <div className="scroll-box">
        <List>
            {loopTruMsgs(props.messages)}
        </List>
        
        <div className="cover-bar"></div>
    </div>
  );
};

ChatItem.propTypes={
    messages: PropTypes.array.isRequired
};

export default ChatItem;
