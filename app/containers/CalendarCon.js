import React, { PropTypes } from 'react';
import Calendar from '../components/dashboard/Calendar';
import FormEvent from '../components/forms/FormEvent';
import PageBase from '../components/PageBase';
import GuestEvent from '../components/guest/GuestEvent';
import GuestTitle from '../components/guest/GuestTitle';
import GuestPage from '../components/guest/GuestPage';
import EventTable from '../components/tables/EventTable';

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
        this.updateEnd = this.updateEnd.bind(this);
        this.updateStart = this.updateStart.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
        this.onEditEvent = this.onEditEvent.bind(this);
        this.onDeleteEvent = this.onDeleteEvent.bind(this);
    }

    componentWillMount() {
        this.props.adminActions.checkAdmin();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.event._id !== this.state.event._id) {
            this.setState({ event: Object.assign({}, nextProps.event) });
        } else {
            if(nextProps.event.title!==this.state.event.title);
            this.setState({ event: Object.assign({}, nextProps.event) });
        }
    }

    updateState(e) {
        console.log(e.target.value);
        let i = this.state.event;
        i[e.target.name] = e.target.value;
        this.setState({ event: Object.assign({}, i) });
    }

    updateStart(n = null, date) {
        let e = this.state.event;
        e["start"] = date;
        this.setState({ infos: Object.assign({}, e) });
    }

    updateEnd(n = null, date) {
        let e = this.state.event;
        e["end"] = date;
        this.setState({ infos: Object.assign({}, e) });
    }

    handleErrors(errs){
        let errMsg="";
        Object.keys(errs).forEach(err=>{
        errMsg+=`- ${errs[err].message} \n`;
        }); 
        this.errorAlert(errMsg);
    }


    checkErrors(errObj){
        if(errObj.errors){
            this.handleErrors(errObj.errors);
        } else {
            this.errorAlert(errObj.response);
        }
    }

    errorAlert(err){
        swal("Oooops!",err,"error")
    }

    successAlert(msg){
        swal("Success",msg,"success");
    } 

    saveEvent(e) {
        e.preventDefault();
        this.props.eventActions.saveEvent(this.state.event).then(res => {
            if (res.data.success) {
                this.routerPush();
                this.state.event._id ?
                    this.props.eventActions.updateEventSuccess(res.data.response) :
                    this.props.eventActions.saveEventSuccess(res.data.response);
                    this.successAlert("Event saved!");
                return;
            } else{
                this.checkErrors(res.data.response);
            }
        }).catch(err => {
            this.errorAlert(err);
            throw err;
        })
    }

    onEditEvent(id) {
        this.context.router.push('/events/' + id);
    }

    onDeleteEvent(id) {
        this.props.eventActions.deleteEvent(id).then(res => {
            if (res.data.success) {
                this.routerPush();
                this.props.eventActions.deleteEventSuccess(res.data.response);
                return;
            } else {
                this.checkErrors(res.data.response);
            }
        }).catch(err => {
            this.errorAlert(err);
            throw err;
        });
    }

    routerPush() {
        this.context.router.push('/events');
    }

    render() {
        return (
            <div>
                <FormEvent
                    param={this.props.routeParams.event}
                    event={this.state.event}
                    onSaveEvent={this.saveEvent}
                    updateState={this.updateState}
                    updateEnd={this.updateEnd}
                    updateStart={this.updateStart}
                    onDeleteEvent={this.onDeleteEvent} />
                <EventTable 
                    events={this.props.events}
                    onEditEvent={this.onEditEvent}
                    param={this.props.routeParams.event}
                />
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
            if(!found){
                window.location="/events";
            }
            event = found[0];
        } else {
            event = { title: "", description: "", start: new Date(),end: new Date() };
        }
    } else {
        event = { title: "", description: "", end: new Date(), start: new Date() };
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
