import React, { PropTypes } from 'react';
import Calendar from '../components/dashboard/Calendar';
import FormEvent from '../components/forms/FormEvent';
import PageBase from '../components/PageBase';

import { connect } from 'react-redux';
import * as eventActions from '../actions/EventActions';
import * as adminActions from '../actions/AdminActions';
import { bindActionCreators } from 'redux';
import moment from 'moment';

class CalendarCon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            infos:{
                title:"",
                description:"",
                end_date: moment().format('MMMM Do YY')
            }
        }
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
        this.props.adminActions.checkAdmin();
    }

    updateState(e){
        let i = this.state.infos;
        console.log(e);
    }

    updateDate(n=null,date){
        console.log(date)
    }

    render() {
        return (
            <div>
                <FormEvent 
                    updateState={this.updateState}
                    updateDate={this.updateDate}/>
                <PageBase title="Events"
                    navigation="Application / CpE Events">
                    <Calendar events={this.props.events}/>
                </PageBase>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
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