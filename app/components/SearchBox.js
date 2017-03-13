import React from 'react';
import TextField from 'material-ui/TextField';
import {white, blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';

const SearchBox = () => {

  const styles = {
    iconButton: {
      float: 'left',
      paddingTop: 12
    },
    textField: {
      color: white,
      backgroundColor: blue500,
      borderRadius: 2,
      height: 35,
      width:"77% !important",
      marginTop:"5px",
      paddingTop:"5px !important", 
      paddingBottom:"5px !important"
    },
    inputStyle: {
      color: white,
      paddingLeft: 5,
      width:"95%"
    },
    hintStyle: {
      height: 16,
      width:"initial",
      paddingLeft: 5,
      color: white
    },
    marg:{
       marginTop:"5px !important"
    }
  };

  return (
    <div style={styles.marg}>
      <IconButton style={styles.iconButton} >
        <Search color={"black"} />
      </IconButton>
      <TextField
        hintText="Search..."
        underlineShow={false}
        fullWidth={true}
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.hintStyle}
      />
    </div>
  );
};

export default SearchBox;
