import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, grey800} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class InfoBox extends React.Component {

  render() {
    const {color, title, value, Icon} = this.props;

    const styles = {
      content: {
        padding: '5px 10px',
        marginLeft: 90,
        height: 80,
        backgroundColor: "#2b2838"
      },
      sub: {
        display: 'block',
        fontWeight: "300",
        fontSize: 14,
        color: "white"
      },
      text: {
        fontSize: 20,
        fontWeight: typography.fontWeightLight,
        color: "white"
      },
      iconSpan: {
        float: 'left',
        height: "auto",
        width: 90,
        textAlign: 'center',
        backgroundColor: "#2b2838"
      },
      icon: {
        height: 48,
        width: 48,
        maxWidth: '100%'

      },
      bg:{
        backgroundColor:"#2b2838",
        borderLeftWidth: "10px",
        borderLeftStyle: "solid",
        borderLeftColor: color,
        overflow:"hidden",
        wordWrap:"break-word"
      },
      fontcolor:{
          color: "white"
      },
      oT:{
        wordWrap:"break-word",
        overflow:"hidden",
        textOverflow:"ellipsis",
        whiteSpace: "pre" 
      }
    };

    return (
    <div>
      <Card style={styles.bg}>
        <CardHeader
          title={<span style={styles.text} textStyle={styles.oT}>{title}</span>}
          subtitle={<span style={styles.sub}>{value}</span>}
          avatar={
          <span style={styles.iconSpan}>
            <Icon color={white}
                  style={styles.icon}
            />
          </span>}
          actAsExpander={true}
          showExpandableButton={true}
          style={styles.fontcolor}
          titleColor={"white"}
          subtitleColor={"white"}
        />
        <CardText style={styles.fontcolor} expandable={true}>
          {value}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
      </div>
      );
  }
}

InfoBox.propTypes = {
  Icon: PropTypes.any, // eslint-disable-line
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string
};

export default InfoBox;