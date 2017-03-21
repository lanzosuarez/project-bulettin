import React, { PropTypes } from 'react';
import Calendar from '../components/dashboard/Calendar';
import FormAnnounce from '../components/forms/FormAnnounce';
import AnnounceTable from '../components/tables/AnnounceTable';

import { connect } from 'react-redux';
import * as announcementActions from '../actions/AnnouncementActions';
import * as adminActions from '../actions/AdminActions';
import { bindActionCreators } from 'redux';
import AnnouncementApi from '../api/AnnouncementApi';

class AnnounceCon extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            announcement: Object.assign({}, props.announcement)
        }

        this.updateState = this.updateState.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        this.props.adminActions.checkAdmin();
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.state.announcement);
        console.log("on next", nextProps);
        if (nextProps.announcement.title!==this.state.announcement.title) {
            console.log("satisfied");
            this.setState({ announcement: Object.assign({}, nextProps.announcement) });
        }
    }

    updateState(e) {
        console.log(e.target.value);
        let i = this.state.announcement;
        i[e.target.name] = e.target.value;
        this.setState({ announcement: Object.assign({}, i) });
    }

    onSave(e) {
        e.preventDefault();
        this.props.announcementActions.saveAnnouncement(this.state.announcement).then(res => {
            console.log(res);
            if (res.data.success) {
                this.pushRoute();
                !this.state.announcement._id ?
                    this.props.announcementActions.saveAnnouncementSuccess(res.data.response) :
                    this.props.announcementActions.updateAnnouncementSuccess(res.data.response);
                
                return;
            }
            console.log(res.data.response);
        }).catch(err => {
            throw err;
        });
    }

    onDelete(id){
        console.log(id);
        this.props.announcementActions.deleteAnnouncement(id).then(res=>{
            console.log(res);
            if(res.data.success){
                this.pushRoute()
                this.props.announcementActions.deleteAnnouncementSuccess(id);
                return;
            }
            console.log(res.data.response);
        }).catch(err=>{
            throw err;
        });
    }

    pushRoute(){
        this.context.router.push("/announcements");
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <FormAnnounce
                    param={this.props.routeParams.ann}
                    onDelete={this.onDelete}
                    announcement={this.state.announcement}
                    updateState={this.updateState}
                    onSave={this.onSave}
                />
                <AnnounceTable announcements={this.props.announcements} />
            </div>
        );
    }
}

AnnounceCon.contextTypes = {
    router: PropTypes.object.isRequired
};

function findAnnouncement(announcements, id) {
    return announcements.filter(a => {
        return a._id === id;
    });
}

function mapStateToProps(state, ownProps) {
    console.log("on state", state);
    let ann;
    if (ownProps.routeParams.ann) {
        if (state.announcements.length > 0) {
            let found = findAnnouncement(state.announcements, ownProps.routeParams.ann);
            console.log(found);
            if(!found.length){
                window.location = "/announcements";
            }
            ann = found[0];
        }
        else {
            ann = { title: "", description: "" };
        }
    } else {
        ann = { title: "", description: "" };
    }
    return {
        announcement: ann,
        announcements: state.announcements
    };
}

function mapDispatchToProps(dispatch) {
    return {
        adminActions: bindActionCreators(adminActions, dispatch),
        announcementActions: bindActionCreators(announcementActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnounceCon);