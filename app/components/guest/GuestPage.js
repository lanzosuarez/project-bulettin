import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';

const GuestPage = (props) => {

    const {color, size} = props;
    const styles = {
        size:{
            minHeight: "500px",
            width: "100%", 
            backgroundColor: color,
            color:"white",
            padding: "46px 38px"
        }
    };
    return (
            <div id="gPage">
                <Paper style={styles.size} zDepth={props.size}>
                    {props.children}
                </Paper>
            </div>
        );
}



export default GuestPage;