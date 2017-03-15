import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ChatToggle from '../../containers/ChatToggle';

const GuestButton = () => {
  let s1={display:"inline-flex"}
  return(
    <div>
        <div className="row">
            <div className="col-md-9" style={s1}>
                <div className="col-md-5">
                    <FlatButton label="Announcements" id="gb"/>
                    <FlatButton label="Schedules" id="gb" />
                    <FlatButton label="Events" id="gb"/>
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