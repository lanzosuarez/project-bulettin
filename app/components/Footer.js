import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
const Footer = () => {
  const styles = {
        size:{
            height: "inherit",
            width: "100%",
            padding: "46px 38px",
            textAlign: "center",
            backgroundColor: "rgb(24, 23, 35)"
        }
    };
    return (
      <Paper style={styles.size} zDepth={1}>
        <div id="cpeLogo"><img id="footLg" src ="/images/1.png" /></div>
            <h1 className="footh1">Team 17</h1>
            <h1 className="footh1">Computer Engineering 5-1</h1>
            <h1 className="footh1">Polytechnic University of the Philippines</h1>
            <h1 className="footh1">All rights reserved 2017</h1>
      </Paper>
    );
  
}

export default Footer;