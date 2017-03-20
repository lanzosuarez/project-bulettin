import React, { PropTypes } from 'react';
import Calendar from '../components/dashboard/Calendar';
import FormAnnounce from '../components/forms/FormAnnounce';
import AnnounceTable from '../components/tables/AnnounceTable';

class AnnounceCon extends React.Component {
    render(){
        return(
        <div>
            <FormAnnounce />
            <AnnounceTable />
        </div>
        );
    }
}


export default AnnounceCon;