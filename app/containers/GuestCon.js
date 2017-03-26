import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
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
import { Link } from 'react-router';
import { concat } from 'lodash';
import Loading from '../components/Loading';

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
                year: 2,
                section: 1
            },
            keyword: "",
            AnnSliceLen: 1,
            EvntSliceLen: 1,
            isLoading: true,
        };
        this.filterScheds = this.filterScheds.bind(this);
        this.updateState = this.updateState.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onEditEvent = this.onEditEvent.bind(this);
        this.onDeleteEvent = this.onDeleteEvent.bind(this);
        this.getRandomColor = this.getRandomColor.bind(this)
        this.addSlices = this.addSlices.bind(this);
        this.buttonText = this.buttonText.bind(this);
    }

    componenWillReceiveProps(nextProps) {
        if (nextProps.announcements.length !== this.props.ann.length) {
            this.setState({ slices: nextProps.announcements.slice(0, 4) })
        }
    }

    componentDidMount() {
        this.props.adminActions.checkAdminAccess();
        this.setState({isLoading:false});
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

    supplySlicesLen(arr) {
        return Math.ceil(arr.length / 4);
    }

    addSlices(field = null) {
        if (field) {
            if (this.state.AnnSliceLen === this.supplySlicesLen(this.props.announcements)) {
                this.setState({ AnnSliceLen: 1 });
                return;
            }
            this.setState({ AnnSliceLen: this.state.AnnSliceLen + 1 });
        } else {
            if (this.state.EvntSliceLen === this.supplySlicesLen(this.props.events)) {
                this.setState({ EvntSliceLen: 1 });
                return;
            }
            this.setState({ EvntSliceLen: this.state.EvntSliceLen + 1 });
        }
    }

    buttonText(arr1, arr2, flag=null) {
        if (arr2.length <= 4) {
            return null;
        } else {
            return <RaisedButton label={arr1.length === arr2.length ? "View Less" : "View More"} 
            onTouchTap={() => { this.addSlices((flag ? 1 : null)) }}
            buttonStyle={{backgroundColor: "rgb(43, 40, 56)", border: "1px solid white"}}
            labelColor={"white"}
            />
        }

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
                            id={announcement._id}
                            color={getColor}
                            title={announcement.title}
                            value={announcement.description}
                            date={months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear()}
                            key={index}
                            admin={this.props.admin}
                        />
                    </div>
            });

        let events = this.props.events.map((ev, index) => {
            return <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                        <GuestEvent
                            key={index}
                            id={this.props.admin}
                            onEditEvent={this.onEditEvent}
                            onDeleteEvent={this.onDeleteEvent}
                            index={index} ev={ev}
                            param={this.props.routeParams.event}
                        />
                    </div>;
            }
        )

        //let filteredEvents = events.filter((a, i) => i < this.state.EvntSliceLen * 4);
        let filteredEvents = events.slice(0, this.state.EvntSliceLen * 4);
        let filteredAnnouncements = announcements.filter((a, i) => i < this.state.AnnSliceLen * 4);
        let filteredScheds = this.filterScheds();
        return (
            <div>
                <div>
                    <GuestTitle title={"Annoucements"} />
                    <div className="row" id="gCon">
                        {filteredAnnouncements}
                    </div>
                    <div id="viewMe">
                        {this.buttonText(filteredAnnouncements,this.props.announcements,1)}
                    </div>
                </div>
                <GuestPage color={"#2b2838"}>
                    <GuestTitle title={"Schedules"}
                        size={2} />
                    <div id="schedules">
                        <Schedules
                            id={this.props.admin}
                            onSearch={this.onSearch}
                            schedules={filteredScheds}
                            defYearValue={this.state.infos.year}
                            updateState={this.updateState}
                        />
                    </div>
                </GuestPage>
                <GuestPage color={"rgb(56, 53, 74)"} shadow={"none"}>
                    <GuestTitle title={"Events"}
                        size={0} />
                    <div className="row eventPads" id="events" >
                        {filteredEvents}
                    </div>
                    <div id="viewMe2">
                        {this.buttonText(filteredAnnouncements,this.props.announcements,1)}
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
    return {
        guests: state.guests,
        admin: state.admin,
        schedules: state.schedules,
        events: state.events,
        announcements: state.announcements,
        ajaxCallInProgress: state.ajaxCallsInProgress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        adminActions: bindActionCreators(adminActions, dispatch),
        scheduleActions: bindActionCreators(scheduleActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(GuestCon);