import React, { PropTypes } from 'react';
import Calendar from '../components/dashboard/Calendar';
import FormEvent from '../components/forms/FormEvent';
import PageBase from '../components/PageBase';
import GuestEvent from '../components/guest/GuestEvent';
import GuestTitle from '../components/guest/GuestTitle';
import GuestPage from '../components/guest/GuestPage';

import { connect } from 'react-redux';
import * as eventActions from '../actions/EventActions';
import * as adminActions from '../actions/AdminActions';
import { bindActionCreators } from 'redux';
import moment from 'moment';

class CalendarCon extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            event: Object.assign({}, props.event),
        }
        this.updateState = this.updateState.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
        this.onEditEvent = this.onEditEvent.bind(this);
        this.onDeleteEvent = this.onDeleteEvent.bind(this);
    }

    componentDidMount() {
        this.props.adminActions.checkAdmin();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.event.title !== this.state.event.title) {
            this.setState({ event: Object.assign({}, nextProps.event) });
        }
    }

    updateState(e) {
        console.log(e.target.value);
        let i = this.state.event;
        i[e.target.name] = e.target.value;
        this.setState({ event: Object.assign({}, i) });
    }

    updateDate(n = null, date) {
        let e = this.state.event;
        e["end"] = date;
        this.setState({ infos: Object.assign({}, e) });
    }

    saveEvent(e) {
        e.preventDefault();
        this.props.eventActions.saveEvent(this.state.event).then(res => {
            console.log(res);
            if (res.data.success) {
                this.routerPush();
                this.state._id ?
                    this.props.eventActions.updateEventSuccess(res.data.response) :
                    this.props.eventActions.saveEventSuccess(res.data.response);
                return;
            }
            console.log(res)
        }).catch(err => {
            throw err;
        })
    }

    onEditEvent(id) {
        console.log(id);
        this.context.router.push('/events/' + id);
    }

    onDeleteEvent(id) {
        console.log(id);
        this.props.eventActions.deleteEvent(id).then(res => {
            if (res.data.success) {
                this.routerPush();
                this.props.eventActions.deleteEventSuccess(res.data.response);
                return;
            }
            console.log(res.data);
        }).catch(err => {
            throw err;
        });
    }

    routerPush() {
        this.context.router.push('/events');
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <FormEvent
                    param={this.props.routeParams.event}
                    event={this.state.event}
                    onSaveEvent={this.saveEvent}
                    updateState={this.updateState}
                    updateDate={this.updateDate} />
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
            </div>
        );
    }
}

CalendarCon.contextTypes = {
    router: PropTypes.object.isRequired
};

function findEvent(events, id) {
    return events.filter(e => {
        return e._id === id;
    });
}


function mapStateToProps(state, ownProps) {
    console.log("on state", state);
    let event;
    if (ownProps.routeParams.event) {
        if (state.events.length > 0) {
            let found = findEvent(state.events, ownProps.routeParams.event);
            console.log(found);
            event = found[0];
        } else {
            event = { title: "", description: "", end: new Date() };
        }
    } else {
        event = { title: "", description: "", end: new Date() };
    }
    return {
        event: event,
        events: state.events
    };
}

function mapDispatchToProps(dispatch) {
    return {
        adminActions: bindActionCreators(adminActions, dispatch),
        eventActions: bindActionCreators(eventActions, dispatch),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CalendarCon);