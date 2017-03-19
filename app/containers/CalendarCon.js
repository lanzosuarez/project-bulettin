import React, { PropTypes } from 'react';
import Calendar from '../components/dashboard/Calendar';
import FormEvent from '../components/forms/FormEvent';
import PageBase from '../components/PageBase';

class CalendarCon extends React.Component {
    render(){
        return(
        <div>
            <FormEvent/>
            <PageBase title="Events"
                navigation="Application / CpE Events">
            <Calendar />
            </PageBase>
        </div>
        );
    }
}


export default CalendarCon;