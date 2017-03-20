import React, { PropTypes } from 'react';
import FormSched from '../components/forms/FormSched';
import Schedules from '../components/schedules/Schedules';
import Data from '../data';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as scheduleActions from '../actions/ScheduleActions';
import * as adminActions from '../actions/AdminActions';
import SchedApi from '../api/SchedApi';
import { browserHistory } from 'react-router';



class SchedulesCon extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sched: Object.assign({}, props.sched),
      infos: {
        year: 2,
        section: 1
      },
      keyword: ""
    }
    this.filterScheds = this.filterScheds.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateSchedForText = this.updateSchedForText.bind(this);
    this.updateSchedForSelect = this.updateSchedForSelect.bind(this);
    this.onSaveSched = this.onSaveSched.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  componentDidMount() {
    this.props.adminActions.checkAdmin();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sched._id) {
      this.setState({ sched: Object.assign({}, nextProps.sched) });
    } else {
      if (nextProps.sched.section) {
        this.setState({ sched: Object.assign({}, nextProps.sched) });
      }
    }
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

  updateSchedForText(e) {
    let sched = this.state.sched;
    sched[e.target.name] = e.target.value;
    this.setState({ sched: Object.assign({}, sched) });
  }

  updateSchedForSelect(e, key, payload) {
    let sched = this.state.sched;
    sched[payload] = key + 1;
    this.setState({ sched: Object.assign({}, sched) });
  }

  onSaveSched(e) {
    e.preventDefault();
    this.props.scheduleActions.saveSched(this.state.sched);
  }

  render() {
    let filtered = this.filterScheds();
    return (
      <div>
        <FormSched
          onSaveSched={this.onSaveSched}
          sched={this.state.sched}
          updateSchedForText={this.updateSchedForText}
          updateSchedForSelect={this.updateSchedForSelect}
        />
        <Schedules
          onSearch={this.onSearch}
          schedules={filtered}
          defYearValue={this.state.infos.year}
          updateState={this.updateState} />
      </div>
    );
  }
}

SchedulesCon.contextTypes = {
  router: PropTypes.object.isRequired
};

function findSched(schedules, id) {
  return schedules.find(sched => {
    return sched._id === id;
  });
}

function mapStateToProps(state, ownProps) {
  let sched;
  if (ownProps.routeParams.sched) {
    if (state.schedules.length > 0) {
      let id = ownProps.routeParams.sched;
      sched = findSched(state.schedules, id);
      console.log("onfind", sched);
    }
  } else {
    sched = { section: 1, year: 1, description: '', schedule: '', subject_code: '', section_code: '', lec: '', lab: '', units: '', room_no: '' };
  }
  return {
    sched: sched,
    schedules: state.schedules
  };
}

function mapDispatchToProps(dispatch) {
  return {
    scheduleActions: bindActionCreators(scheduleActions, dispatch),
    adminActions: bindActionCreators(adminActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulesCon);
