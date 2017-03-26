import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, grey800} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';

class InfoBox extends React.Component {

  render() {
    const {color, title, value, Icon, date, admin, id} = this.props;

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
        color: "white",
      },
      iconSpan: {
        float: 'left',
        height: "auto",
        width: "auto",
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
        wordWrap:"break-word",
      },
      fontcolor:{
          color: "white",
          height:"108px",
          wordWrap:"break-word",
          overflow: "hidden",
          textOverflow: "clip",
      },
      oT:{
        wordWrap:"break-word",
        overflow:"hidden",
        textOverflow:"ellipsis",
        whiteSpace: "pre",
      },
      white:{
        color:"white"
      }
    };

    return (
    <div>
      <Card style={styles.bg}>
        <CardHeader
          title={<span style={styles.text} textStyle={styles.oT}>{title}</span>}
          subtitle={<span style={styles.sub}>{date}</span>}
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
        <CardActions>
        {admin?
          <Link to={"/announcements/"+id}>
            <FlatButton style={styles.white} label="Edit" />
          </Link>:null
        }
        </CardActions>
        <CardText style={styles.fontcolor} expandable={true}>
          {value}
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