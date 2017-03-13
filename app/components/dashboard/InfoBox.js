import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, grey800} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';

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
        height: 90,
        width: 90,
        textAlign: 'center',
        backgroundColor: "#2b2838"
      },
      icon: {
        height: 48,
        width: 48,
        marginTop: 20,
        maxWidth: '100%'

      },
      bg:{
        backgroundColor:"#2b2838",
        borderLeftWidth: "10px",
        borderLeftStyle: "solid",
        borderLeftColor: color
      }
    };

    return (
      <Paper style={styles.bg}>
        <span style={styles.iconSpan}>
          <Icon color={white}
                style={styles.icon}
          />
        </span>

        <div style={styles.content}>
          <span style={styles.text}>{title}</span>
          <span style={styles.sub}>{value}</span>
        </div>
      </Paper>
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
