import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import ContentSend from 'material-ui/svg-icons/content/send';
import RaisedButton from 'material-ui/RaisedButton';
import {grey400, cyan600, white} from 'material-ui/styles/colors';

const ChatSend = () => {
  let s1={height:"101px"}
  let s2 = {position: "absolute", right: "6px", top: "46px"}
  let s3 = {backgroundColor: "#00E5FF!important", color: "white!important"}

  return (
    <div>
        <form>
            <div style={s1}>
              <TextField
              hintText="Message Field"
              floatingLabelText="Message"
              multiLine={true}
              underlineShow={false}
              rows={2}
              rowsMax={3}
              fullWidth={true}
              />
            </div>
            <div>
              <RaisedButton
                label="SEND"
                fullWidth={true}
                icon={<ContentSend />}
                backgroundColor="#0097A7"
                style={s3}
              />
            </div>
        </form>
      </div>
  );
};

export default ChatSend;
