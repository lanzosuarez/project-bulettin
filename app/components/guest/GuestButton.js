import React from 'react';
import Scrollchor from 'react-scrollchor';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ArrowUp from 'material-ui/svg-icons/navigation/arrow-upward';
import ChatToggle from '../../containers/ChatToggle';
import {grey200, grey500} from 'material-ui/styles/colors';

const GuestButton = () => {
  const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    }
  }
  let s1={display:"inline-flex"}
  return(
    <div>
        <Scrollchor to="#up">
            <FloatingActionButton style={styles.floatingActionButton} backgroundColor={grey500}>
                <ArrowUp />
            </FloatingActionButton>
        </Scrollchor>
        <div className="row">
            <div className="col-md-9" style={s1}>
                <div className="col-md-5">
                    <Scrollchor to="#announcie">
                        <FlatButton label="Announcements" id="gb"/>
                    </Scrollchor>
                    <Scrollchor to="#schedie">
                        <FlatButton label="Schedules" id="gb" />
                    </Scrollchor>
                    <Scrollchor to="#eventsie">
                        <FlatButton label="Events" id="gb"/>
                    </Scrollchor>
                </div>
                <div className="col-md-2">
                    <ChatToggle />
                </div>
            </div>
        </div>
    </div>
    );
};

export default GuestButton;