import React, {PropTypes} from 'react';
import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import Faculties from 'material-ui/svg-icons/action/supervisor-account';
import InfoBox from '../components/dashboard/InfoBox';
import NewOrders from '../components/dashboard/NewOrders';
import MonthlySales from '../components/dashboard/MonthlySales';
import Calendar from '../components/dashboard/Calendar';
import DeptTop from '../components/dashboard/DeptTop';
import globalStyles from '../styles';
import Data from '../data';

import { connect } from 'react-redux';
import AuthApi from '../api/AuthApi';
import * as adminActions from '../actions/AdminActions';
import {bindActionCreators} from 'redux';

class DashboardCon extends React.Component {
  constructor(props, context) {
    super(props);
    this.navigateToGuest = this.navigateToGuest.bind(this);
  }

  componentDidMount() {
    this.props.adminActions.checkAdmin();
  }

  navigateToGuest(){
    this.context.router.push("/");
  }

  render() {
    return (
      <div>
        <h3 style={globalStyles.navigation}>Application / Dashboard</h3>
        <button onClick={this.navigateToGuest}>Go to Guest</button>

        <div className="row">

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <InfoBox Icon={Faculties}
              color={pink600}
              title="Announcement"
              value="Announcement subheader"
            />
          </div>


          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <InfoBox Icon={ThumbUp}
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

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <NewOrders data={Data.dashBoardPage.newOrders} />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
            <MonthlySales data={Data.dashBoardPage.monthlySales} />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <DeptTop data={Data.dashBoardPage.deptTop} />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          </div>
        </div>
      </div>
    );
  }
}

DashboardCon.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    admin: state.admin,
    events: state.events
  };
}

function mapDispatchToProps(dispatch){
  return{
    adminActions: bindActionCreators(adminActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCon);
