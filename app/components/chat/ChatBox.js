import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

const ChatBox = (props) => {

  const styles = {
    paper: {
      height: "794px",
      padding: 10
    },
  };

  return (
    <Paper style={styles.paper}  zDepth={3}>
      {props.children}
    </Paper>
  );
};

export default ChatBox;
