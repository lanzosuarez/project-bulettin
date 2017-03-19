import React, { PropTypes } from 'react';
import Calendar from '../components/dashboard/Calendar';
import FormAnnounce from '../components/forms/FormAnnounce';
import PageBase from '../components/PageBase';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import Faculties from 'material-ui/svg-icons/action/supervisor-account';
import InfoBox from '../components/dashboard/InfoBox';

class AnnounceCon extends React.Component {
    render(){
        return(
        <div>
            <FormAnnounce />
            <PageBase title="Announcements"
                navigation="Application / Announcements">
            
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                <InfoBox Icon={Faculties}
                        color={pink600}
                        title="Announcement"
                        value="Announcement subheader"
                />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                <InfoBox Icon={ThumbUp}
                        color={cyan600}
                        title="Announcement"
                        value="Announcement subheader"
                />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                <InfoBox Icon={Assessment}
                        color={purple600}
                        title="Announcement"
                        value="Announcement subheader"
                />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                <InfoBox Icon={Face}
                        color={orange600}
                        title="Announcement"
                        value="Announcement subheader"
                />
                </div>
            </div>
            </PageBase>
        </div>
        );
    }
}


export default AnnounceCon;