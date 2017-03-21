import React, { PropTypes } from 'react';
import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import Faculties from 'material-ui/svg-icons/action/supervisor-account';
import GuestEvent from '../components/guest/GuestEvent';
import GuestTitle from '../components/guest/GuestTitle';
import GuestPage from '../components/guest/GuestPage';
import InfoBox from '../components/dashboard/InfoBox';
import Footer from '../components/Footer';
import Schedules from '../components/schedules/Schedules';
import FlatButton from 'material-ui/FlatButton';
import Data from '../data';
import {Link} from 'react-router';

import { connect } from 'react-redux';
import AuthApi from '../api/AuthApi';
import { isEmpty } from 'lodash';
import * as adminActions from '../actions/AdminActions';
import * as scheduleActions from '../actions/ScheduleActions';
import { bindActionCreators } from 'redux';

class GuestCon extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            infos: {
                year: 1,
                section: 1
            },
            keyword: ""
        };
        this.filterScheds = this.filterScheds.bind(this);
        this.updateState = this.updateState.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onEditEvent = this.onEditEvent.bind(this);
        this.onDeleteEvent = this.onDeleteEvent.bind(this);
        this.getRandomColor = this.getRandomColor.bind(this)
    }

    componentDidMount() {
        this.props.adminActions.checkAdminAccess();
    }
    updateState(value, field) {
        let i = this.state.infos;
        i[field] = value;
        this.setState({ infos: i })
    }

    filterScheds() {
        let s;
        let keyword = this.state.keyword;
        let { year, section } = this.state.infos;
        s = this.props.schedules.filter(s => {
            return s.year === year && s.section === section;
        });
        if (keyword) {
            s = s.filter(s => {
                return s.subject_code.indexOf(keyword) > -1 ||
                    s.section_code.indexOf(keyword) > -1
            });
        }
        return s;
    }

    onSearch(e) {
        this.setState({ keyword: e.target.value });
    }

    onEditEvent(id) {
        console.log(id);
        this.context.router.push('/events/' + id);
    }

    onDeleteEvent(id) {
        this.context.router.push('/events/' + id);
    }

    getRandomColor(arr) {
        let randNum = Math.floor(Math.random() * 4);
        return arr[randNum];
    }

    supplyIcon(arr) {
        let randNum = Math.floor(Math.random() * 2)
        return arr[randNum];
    }


    render() {
        const months = ["January", "Februay", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let colors = [pink600, cyan600, purple600, orange600];
        let icons = [Faculties, Assessment];
        let announcements = this.props.announcements.map((announcement, index) => {
            let getColor = this.getRandomColor(colors);
            let getIcon = this.supplyIcon(icons);
            let d = new Date(announcement.createDate);
            return <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                <InfoBox Icon={getIcon}
                    color={getColor}
                    title={announcement.title}
                    value={announcement.description}
                    date={months[d.getMonth()]+" "+d.getDate()+", "+ d.getFullYear()}
                    key={index}
                />
                {
                    this.props.admin?
                    <Link to={"/announcements/"+announcement._id}><FlatButton style={{ color: "white" }} label="Edit" /></Link>:
                    null
                }
            </div>
        });
        
           
        let filtered = this.filterScheds();
return (
    <div>
        <GuestTitle title={"Annoucements"} />
        <div className="row" id="gCon">
            {announcements}
        </div>
        <GuestPage color={"#2b2838"}>
            <GuestTitle title={"Schedules"}
                size={2} />
            <Schedules
                id={this.props.admin}
                onSearch={this.onSearch}
                schedules={filtered}
                defYearValue={this.state.infos.year}
                updateState={this.updateState}
            />
        </GuestPage>
        <GuestPage color={"rgb(56, 53, 74)"}>
            <GuestTitle title={"Events"}
                size={0} />
            <div className="row eventPads" >
                {this.props.events.map((ev, index) =>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                        <GuestEvent 
                            key={index}
                            id={this.props.admin}
                            onEditEvent={this.onEditEvent}
                            onDeleteEvent={this.onDeleteEvent}
                            index={index} ev={ev}
                            param={this.props.routeParams.event}
                        />
                    </div>
                )}
            </div>
        </GuestPage>
        <Footer />
    </div>
);
    }
}

GuestCon.propTypes = {
    messages: PropTypes.array,
    guests: PropTypes.array,
    socket: PropTypes.object,
    socketActions: PropTypes.object.isRequired,
    admin: PropTypes.object
};

GuestCon.contextTypes = {
    router: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        guests: state.guests,
        admin: state.admin,
        schedules: state.schedules,
        events: state.events,
        announcements: state.announcements
    };
}

function mapDispatchToProps(dispatch) {
    return {
        adminActions: bindActionCreators(adminActions, dispatch),
        scheduleActions: bindActionCreators(scheduleActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(GuestCon);