import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Dp from 'material-ui/svg-icons/action/perm-identity';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';


function chkUrl(msg){
    if(msg.nickname==="admin"){
        return "/images/elyse.png";
    } else {
        if(msg.url){
            console.log("onstasdsadsa");
            return msg.url;
        } else {
            return "/images/jenny.jpg";
        }
    }
}

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
    let msgs = messages.map((msg) => {
        let urlImg = chkUrl(msg);
        return <div style={styles.chat}>
            <ListItem
                leftAvatar={<Avatar src={urlImg} />}
                secondaryTextLines={2}
            >
                <div className="talk-bubble tri-right left-top">
                    <div className="text-head">
                        <p>{msg.nickname} | {msg.sendDate}</p>
                    </div>
                    <div id={styles.chat} className="talk">
                        <p style={{ wordBreak: "break-all" }}>{msg.message}</p>
                    </div>
                    {msg.seenDate?<div className="seen">
                        <p>&#10004; {msg.seenDate}</p>
                    </div>:null}
                </div>
            </ListItem>
        </div>
    });
    return msgs;

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
