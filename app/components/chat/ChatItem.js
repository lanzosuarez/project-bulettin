import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Dp from 'material-ui/svg-icons/action/perm-identity';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';



const loopTruMsgs = (messages) => {
    const styles = {
        bubble: {
            fill: "rgb(0, 151, 167)"
        },
        chat: {
            overflow: "initial",
            "whiteSpace": "initial"
        }
    };
    return messages.map((msg) => {
        return <div style={styles.chat}>
            <ListItem
                leftAvatar={<Avatar src="/images/jenny.jpg"/>}
                secondaryTextLines={2}
            >
                <div className="talk-bubble tri-right left-top">
                    <div className="text-head">
                        <p>{msg.nickname} | 09:43am</p>
                    </div>
                    <div id={styles.chat} className="talk">
                        <p style={{ wordBreak: "break-all" }}>{msg.message}</p>
                    </div>
                    <div className="seen">
                        <p>&#10004; Seen 1:29pm</p>
                    </div>
                </div>
            </ListItem>
        </div>
    });

};

const ChatItem = (props) => {
    const msgs = loopTruMsgs(props.messages);
    return (
        <div className="scroll-box">
            <List>
            {msgs}
            </List>

            <div className="cover-bar"></div>
        </div>
    );
};

ChatItem.propTypes = {
    messages: PropTypes.array.isRequired
};

export default ChatItem;
