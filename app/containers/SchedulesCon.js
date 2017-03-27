import React, { PropTypes } from 'react';
import FormSched from '../components/forms/FormSched';
import Schedules from '../components/schedules/Schedules';
import Data from '../data';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as scheduleActions from '../actions/ScheduleActions';
import * as adminActions from '../actions/AdminActions';
import * as isLoadingActions from '../actions/IsLoadingActions';
import SchedApi from '../api/SchedApi';
import { browserHistory } from 'react-router';
import LoadBox from '../components/LoadBox';

class SchedulesCon extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sched: Object.assign({}, props.sched),
      infos: {
        year: 1,
        section: 1
      },
      keyword: ""
    }
    this.filterScheds = this.filterScheds.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateSchedForText = this.updateSchedForText.bind(this);
    this.onSaveSched = this.onSaveSched.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onDeleteEvent = this.onDeleteEvent.bind(this);
    this.updateLab = this.updateLab.bind(this);
    this.updateLec = this.updateLec.bind(this);
    this.updateYear = this.updateYear.bind(this);
    this.updateSection = this.updateSection.bind(this);
  }

  componentWillMount() {
    this.props.isLoadingActions.isLoading(true);
  }

  componentDidMount() {
    this.props.adminActions.checkAdminAccess().then(() => {
      this.props.isLoadingActions.isLoading(false);
    });
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


  updateState(field, value) {
    let sched = this.state.sched;
    sched[field] = value;
    this.setState({ sched: Object.assign({}, sched) });
  }
  updateSchedForText(e) {
    this.updateState(e.target.name, e.target.value);
  }

  updateLec(e, key, payload) {
    this.updateState("lec", payload);
  }
  updateLab(e, key, payload) {
    this.updateState("lab", payload)
  }
  updateYear(e, key, payload) {
    this.updateState("year", payload)
  }
  updateSection(e, key, payload) {
    this.updateState("section", payload)
  }



  handleErrors(errs) {
    let errMsg = "";
    Object.keys(errs).forEach(err => {
      errMsg += `- ${errs[err].message} \n`;
    });
    this.errorAlert(errMsg);
  }

  checkErrors(errObj) {
    if (errObj.errors) {
      this.handleErrors(errObj.errors);
    } else {
      this.errorAlert(errObj.response);
    }
  }

  errorAlert(err) {
    swal("Oooops!", err, "error")
  }

  successAlert(msg) {
    swal("Success", msg, "success");
  }

  onSaveSched(e) {
    e.preventDefault();
    this.props.scheduleActions.saveSched(this.state.sched).then(res => {
      if (res.data.success) {
        let { updateSchedSuccess, saveSchedSuccess } = this.props.scheduleActions;
        this.state.sched._id ?
          updateSchedSuccess(res.data.response) :
          saveSchedSuccess(res.data.response);
        this.routerPush();
        this.successAlert("Schedule Added!")

      } else {
        this.checkErrors(res.data.response);
      }
    }).catch(err => {
      this.errorAlert(err);
      throw err;
    })
  }

  confirmDeletion(id, self) {
    swal({
      title: "Are you sure?",
      text: "Click cancel to go back",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      closeOnConfirm: false,
      closeOnCancel: false
    },
      function (isConfirm) {
        if (isConfirm) {
          self.processDeletion(id);
        } else {
          swal("Cancelled!", "Deletion canceled", "error");
        }
      });
  }

  onDeleteEvent(id) {
    let self = this
    this.confirmDeletion(id, self);
  }

  processDeletion(id) {
    this.props.scheduleActions.deleteEvent(id).then(res => {
      if (res.data.success) {
        this.routerPush();
        this.props.scheduleActions.deleteSchedSuccess(res.data.response);
        this.successAlert("Schedule deleted!");
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
    this.context.router.push('/schedules');
  }

  render() {
    let filtered = this.filterScheds();
    if (this.props.isLoading) {
      return <LoadBox />;
    }
    return (
      <div>
        <FormSched
          params={this.props.routeParams.sched}
          onSaveSched={this.onSaveSched}
          sched={this.state.sched}
          updateSchedForText={this.updateSchedForText}
          updateLab={this.updateLab}
          updateLec={this.updateLec}
          updateYear={this.updateYear}
          updateSection={this.updateSection}
          onDeleteEvent={this.onDeleteEvent}
        />
        <Schedules
          id={this.props.admin}
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

function freshSched() {
  return { section: 1, year: 1, description: '', schedule: '', subject_code: '', section_code: '', lec: '', lab: '', units: '', room_no: '' };
}

function mapStateToProps(state, ownProps) {
  let sched;
  if (ownProps.routeParams.sched) {
    if (state.schedules.length > 0) {
      let id = ownProps.routeParams.sched;
      let found = findSched(state.schedules, id);
      if (!found) {
        window.location = "/schedules";
      }
      sched = found;
    } else {
      sched = freshSched();
    }
  } else {
    sched = freshSched();
  }
  return {
    admin: state.admin,
    sched: sched,
    schedules: state.schedules,
    isLoading: state.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    scheduleActions: bindActionCreators(scheduleActions, dispatch),
    adminActions: bindActionCreators(adminActions, dispatch),
    isLoadingActions: bindActionCreators(isLoadingActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulesCon);
