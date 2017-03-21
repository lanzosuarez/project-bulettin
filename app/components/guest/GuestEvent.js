import React, { PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const GuestEvent = (props) => {
  let { start } = props.ev;
  let d = new Date(start);
  const months = ["January", "Februay", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const styles = {
    colors: {
      backgroundColor: "#2b2838 !important",
      borderLeft: "10px solid rgb(24, 23, 35)",
      color: "white"

    },
    fontcolor: {
      color: "white"
    }
  };
  return (
    <Card style={styles.colors} id="gCard" >
      <CardHeader
        title={props.ev.title}
        subtitle={months[d.getMonth()]+" "+d.getDate()+", "+ d.getFullYear()}
        actAsExpander={true}
        showExpandableButton={true}
        style={styles.fontcolor}
        titleColor={"white"}
        subtitleColor={"white"}
      />
      <CardActions>
        {props.id?<FlatButton style={styles.fontcolor} label="Edit" 
        onTouchTap={()=>{
          props.onEditEvent(props.ev._id);
        }}/>:null}
        {props.param?<FlatButton style={styles.fontcolor} label="Delete"  
        onTouchTap={()=>{
          props.onDeleteEvent(props.ev._id);
        }}/>:null}
      </CardActions>
      <CardText style={styles.fontcolor} expandable={true}>
        {props.ev.description}
      </CardText>
    </Card>
  );
}

export default GuestEvent;