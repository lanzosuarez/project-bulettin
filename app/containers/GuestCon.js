import React, { PropTypes } from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import Faculties from 'material-ui/svg-icons/action/supervisor-account';
import GuestEvent from '../components/guest/GuestEvent';
import GuestTitle from '../components/guest/GuestTitle';
import GuestPage from '../components/guest/GuestPage';
import InfoBox from '../components/dashboard/InfoBox';
import Footer from '../components/Footer';
import Schedules from './Schedules';
import Data from '../data';

class GuestCon extends React.Component {
    constructor(props) {
    super(props);
    }

    render(){
        return(
        <div>
            <GuestTitle title={"Annoucements"}/>
            <div className="row" id="gCon">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                    <InfoBox Icon={Faculties}
                            color={pink600}
                            title="Announcement"
                            value="Announcement subheader"
                    />
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                    <InfoBox Icon={Face}
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
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                     <InfoBox Icon={Faculties}
                            color={pink600}
                            title="Announcement"
                            value="Announcement subheader"
                    />
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                    <InfoBox Icon={Face}
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
            <GuestPage color={"#2b2838"}>
                <GuestTitle title={"Schedules"}
                            size={2}/>
                <Schedules />
            </GuestPage>
             <GuestPage color={"rgb(56, 53, 74)"}>
                <GuestTitle title={"Events"}
                            size={0}/>
                <div className = "row eventPads" >
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                        <GuestEvent />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                        <GuestEvent />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                        <GuestEvent />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                        <GuestEvent />
                    </div>
                </div>
            </GuestPage>
            <Footer />
        </div>
        );
    }
}


export default GuestCon;