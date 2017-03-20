import React from 'react';
import FormSched from '../components/forms/FormSched';
import Schedules from '../components/schedules/Schedules';
import Data from '../data';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as scheduleActions from '../actions/ScheduleActions';


class SchedulesCon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: {
        year: 1,
        section: 1
      }
    }
    this.filterScheds = this.filterScheds.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(value, field) {
    let i = this.state.infos;
    i[field] = value;
    this.setState({ infos: i })
  }

  filterScheds() {
    console.log("filtering....");
    let { year, section } = this.state.infos;
    const s = this.props.schedules.filter(s => {
      return s.year === year && s.section === section;
    });
    console.log(s);
    return s
  }

  render() {
    let filtered = this.filterScheds();
    return (
      <div>
        <FormSched />
        <Schedules
          schedules={filtered}
          defYearValue={this.state.infos.year}
          updateState={this.updateState} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    schedules: state.schedules
  };
}

function mapDispatchToProps(dispatch) {
  return {
    scheduleActions: bindActionCreators(scheduleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulesCon);
