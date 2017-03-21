import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import ContentSend from 'material-ui/svg-icons/content/send';
import RaisedButton from 'material-ui/RaisedButton';
import {grey400, cyan600, white} from 'material-ui/styles/colors';

const ChatSend = (props) => {
  let s1={height:"101px"}
  let s2 = {position: "absolute", right: "6px", top: "46px"}
  let s3 = {backgroundColor: "#00E5FF!important", color: "white!important"}
  let s4 = {color: "rgba(134, 130, 130, 0.870588)"}

  return (
    <div>
        <form onSubmit={props.handleSend}>
            <div style={s1}>
              <TextField
              onFocus={props.handleSeenMessages}
              hintText="Message Field"
              floatingLabelText="Message"
              floatingLabelStyle={s4}
              multiLine={true}
              underlineShow={false}
              rows={2}
              rowsMax={3}
              fullWidth={true}
              name="message"
              onChange={props.handleChange}
              />
            </div>
            <div>
              <RaisedButton
                label="SEND"
                fullWidth={true}
                icon={<ContentSend />}
                labelColor={"white"}
                backgroundColor={"#2b2838"}
                style={s4}
                type="submit"
              />
            </div>
        </form>
      </div>
  );
};

ChatSend.propTypes={
  handleChange: PropTypes.func.isRequired,
  handleSend: PropTypes.func.isRequired,
  handleSeenMessages: PropTypes.func.isRequired
};

export default ChatSend;
