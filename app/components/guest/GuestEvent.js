import React, {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const GuestEvent = (props) => {
    const styles = {
        colors:{
            backgroundColor: "#2b2838 !important",
            borderLeft: "10px solid rgb(24, 23, 35)",
            color:"white"

        },
        fontcolor:{
          color: "white"
        }
    };
    return (
      <Card style={styles.colors} id="gCard" >
        <CardHeader
          title="Without Avatar"
          subtitle="Subtitle"
          actAsExpander={true}
          showExpandableButton={true}
          style={styles.fontcolor}
          titleColor={"white"}
          subtitleColor={"white"}
        />
        <CardActions>
          <FlatButton style={styles.fontcolor} label="Action1" />
          <FlatButton style={styles.fontcolor} label="Action2" />
        </CardActions>
        <CardText style={styles.fontcolor} expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    );
}

export default GuestEvent;