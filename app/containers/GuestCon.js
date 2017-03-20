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
import Data from '../data';

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
            access: false,
            infos: {
                year: 1,
                section: 1
            },
            keyword: ""
        };
        this.symbols = [Faculties, Face, Assessment];
        this.filterScheds = this.filterScheds.bind(this);
        this.updateState = this.updateState.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onEditEvent = this.onEditEvent.bind(this);
        this.onDeleteEvent = this.onDeleteEvent.bind(this);
    }

    componentDidMount() {
        this.props.adminActions.checkAdminAccess().then(() => {
            this.setState({ access: this.props.admin !== null ? true : false });
        });
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

        return s
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


    render() {
        let filtered = this.filterScheds();
        return (
            <div>
                <GuestTitle title={"Annoucements"} />
                <div className="row" id="gCon">
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                        <InfoBox Icon={Faculties}
                            color={pink600}
                            title="Announcement"
                            value="Announcement subheader"
                        />
                    </div>
                </div>
                <GuestPage color={"#2b2838"}>
                    <GuestTitle title={"Schedules"}
                        size={2} />
                    <Schedules
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
                                <GuestEvent onEditEvent={this.onEditEvent} 
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
    messages: PropTypes.array.isRequired,
    guests: PropTypes.array.isRequired,
    socket: PropTypes.object.isRequired,
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
        events: state.events
    };
}

function mapDispatchToProps(dispatch) {
    return {
        adminActions: bindActionCreators(adminActions, dispatch),
        scheduleActions: bindActionCreators(scheduleActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(GuestCon);