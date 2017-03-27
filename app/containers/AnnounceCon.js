import React, { PropTypes } from 'react';
import Calendar from '../components/dashboard/Calendar';
import FormAnnounce from '../components/forms/FormAnnounce';
import AnnounceTable from '../components/tables/AnnounceTable';
import swal from 'sweetalert';

import { connect } from 'react-redux';
import * as announcementActions from '../actions/AnnouncementActions';
import * as adminActions from '../actions/AdminActions';
import * as isLoadingActions from '../actions/IsLoadingActions';
import { bindActionCreators } from 'redux';
import AnnouncementApi from '../api/AnnouncementApi';
import LoadBox from '../components/LoadBox';

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

    componentWillMount() {
        this.props.isLoadingActions.isLoading(true);
    }

    componentDidMount() {
        this.props.adminActions.checkAdminAccess().then(() => {
            this.props.isLoadingActions.isLoading(false);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.announcement._id !== this.state.announcement._id) {
            this.setState({ announcement: Object.assign({}, nextProps.announcement) });
        } else {
            if (nextProps.announcement.title !== this.state.announcement.title);
            this.setState({ announcement: Object.assign({}, nextProps.announcement) });
        }
    }

    updateState(e) {
        let i = this.state.announcement;
        i[e.target.name] = e.target.value;
        this.setState({ announcement: Object.assign({}, i) });
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

    onSave(e) {
        e.preventDefault();
        this.props.announcementActions.saveAnnouncement(this.state.announcement).then(res => {
            if (res.data.success) {
                this.pushRoute();
                !this.state.announcement._id ?
                    this.props.announcementActions.saveAnnouncementSuccess(res.data.response) :
                    this.props.announcementActions.updateAnnouncementSuccess(res.data.response);
                this.successAlert("Announcement saved!");
                return;
            } else {
                this.checkErrors(res.data.response);
            }
        }).catch(err => {
            this.errorAlert(err);
            throw err;
        });
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
                    swal("Cancelled!", "Deletion canceled", "error")
                }
            });
    }

    onDelete(id) {
        let self = this;
        this.confirmDeletion(id, self);
    }

    processDeletion(id) {
        this.props.announcementActions.deleteAnnouncement(id).then(res => {
            if (res.data.success) {
                this.pushRoute()
                this.props.announcementActions.deleteAnnouncementSuccess(id);
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

    pushRoute() {
        this.context.router.push("/announcements");
    }

    render() {
        if (this.props.isLoading) {
            return <LoadBox />;
        }
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
    let ann;
    if (ownProps.routeParams.ann) {
        if (state.announcements.length > 0) {
            let found = findAnnouncement(state.announcements, ownProps.routeParams.ann);
            if (!found.length) {
                window.location = "/*";
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
        announcements: state.announcements,
        isLoading: state.isLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        adminActions: bindActionCreators(adminActions, dispatch),
        announcementActions: bindActionCreators(announcementActions, dispatch),
        isLoadingActions: bindActionCreators(isLoadingActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnounceCon);