import React, {PropTypes} from 'react';
import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import Faculties from 'material-ui/svg-icons/action/supervisor-account';
import InfoBox from '../components/dashboard/InfoBox';
import Inquiries from '../components/dashboard/Inquiries';
import Visitors from '../components/dashboard/Visitors';
import Calendar from '../components/dashboard/Calendar';
import BulletinData from '../components/dashboard/BulletinData';
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
    this.getRandomColor = this.getRandomColor.bind(this)
    this.supplyIcon = this.supplyIcon.bind(this);
  }

  componentDidMount() {
    this.props.adminActions.checkAdmin();
  }

  navigateToGuest(){
    this.context.router.push("/");
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
        // let announcements = this.props.announcements.map((announcement, index) => {
        //     let getColor = this.getRandomColor(colors);
        //     let getIcon = this.supplyIcon(icons);
        //     let d = new Date(announcement.createDate);
        //     return <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
        //         <InfoBox Icon={getIcon}
        //             id={announcement._id}
        //             color={getColor}
        //             title={announcement.title}
        //             value={announcement.description}
        //             date={months[d.getMonth()]+" "+d.getDate()+", "+ d.getFullYear()}
        //             key={index}
        //             admin={this.props.admin}
        //         />
        //     </div>
        // });
        // <div className="row">
        //   {announcements}
        // </div>
        
    return (
      <div>
        <h3 style={globalStyles.navigation}>Application / Dashboard</h3>
        <RaisedButton label="Go to Guest" secondary={true} className="goTo" onTouchTap={this.navigateToGuest} />
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <Inquiries data={Data.dashBoardPage.inquiries} />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
            <Visitors data={Data.dashBoardPage.visitors} />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <BulletinData data={Data.dashBoardPage.bulletinData}  />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <Calendar />
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
    events: state.events,
    announcements: state.announcements
  };
}

function mapDispatchToProps(dispatch){
  return{
    adminActions: bindActionCreators(adminActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCon);
