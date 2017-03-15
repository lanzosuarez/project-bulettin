import React, {PropTypes} from 'react';
import Divider from 'material-ui/Divider';

const GuestTitle = (props) => {
    return (
        <div id="gConHeader">
            <h1 id="gCon1">{props.title}</h1>
            <Divider/>
        </div>
    );
}

GuestTitle.propTypes = {
  title: PropTypes.string,
};


export default GuestTitle;