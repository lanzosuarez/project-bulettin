import React, {PropTypes} from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import localizer from 'react-big-calendar/lib/localizers/moment';
import moment from 'moment';
import Paper from 'material-ui/Paper';


// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
localizer(moment); // or globalizeLocalizer

const Calendar = (props) => {
    const styles = {
        paper: {
        minHeight: 344,
        padding: 10,
        backgroundColor:"#2b2838",
        color:"white"
        }
    };
    return(
        <div>
            <Paper style={styles.paper}>
                <BigCalendar
                events={[]}
                startAccessor='startDate'
                endAccessor='endDate'
                />
            </Paper>
        </div>
        );
};
export default Calendar;
