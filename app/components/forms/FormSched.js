import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import PageBase from '../PageBase';

const FormSched = (props) => {
  console.log(props);
  let { sched, updateSchedForText, onSaveSched, params } = props;
  const styles = {
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    }
  };

  return (
    <PageBase title="Form Page"
      navigation="Application / Form Page">
      <form onSubmit={onSaveSched}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5 m-b-15 ">
            <TextField
              onChange={updateSchedForText}
              name="description"
              hintText="Description"
              floatingLabelText="Description"
              fullWidth={true}
              value={sched.description}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5 m-b-15 ">
            <TextField
              onChange={updateSchedForText}
              name="schedule"
              hintText="Schedule"
              floatingLabelText="Schedule"
              fullWidth={true}
              value={sched.schedule}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2 m-b-15 ">
            <TextField
              onChange={updateSchedForText}
              name="subject_code"
              hintText="Subject Code"
              floatingLabelText="Subject Code"
              fullWidth={true}
              value={sched.subject_code}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-1 col-lg-1 m-b-15 ">
            <SelectField
              hintText={sched.year}
              onChange={props.updateYear}
              value={sched.year}
              floatingLabelText="Year"
              fullWidth={true}>
              <MenuItem value={1} primaryText="1" />
              <MenuItem value={2} primaryText="2" />
              <MenuItem value={3} primaryText="3" />
              <MenuItem value={4} primaryText="4" />
              <MenuItem value={5} primaryText="5" />
            </SelectField>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-1 col-lg-1 m-b-15 ">
            <SelectField
              onChange={props.updateSection}
              floatingLabelText="Sec"
              value={sched.section}
              fullWidth={true}>
              <MenuItem value={1} primaryText="1" />
              <MenuItem value={2} primaryText="2" />
              <MenuItem value={3} primaryText="3" />
              <MenuItem value={4} primaryText="4" />
              <MenuItem value={5} primaryText="5" />
            </SelectField>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-1 col-lg-1 m-b-15 ">
            <SelectField
              onChange={props.updateLec}
              floatingLabelText="Lec"
              value={sched.lec}
              fullWidth={true}>
              <MenuItem value={1} primaryText="1" />
              <MenuItem value={2} primaryText="2" />
              <MenuItem value={3} primaryText="3" />
              <MenuItem value={4} primaryText="4" />
              <MenuItem value={5} primaryText="5" />
              <MenuItem value={6} primaryText="6" />
            </SelectField>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-1 col-lg-1 m-b-15 ">
            <SelectField
              onChange={props.updateLab}
              floatingLabelText="Lab"
              value={sched.lab}
              fullWidth={true}>
              <MenuItem value={1} primaryText="1" />
              <MenuItem value={2} primaryText="2" />
              <MenuItem value={3} primaryText="3" />
              <MenuItem value={4} primaryText="4" />
              <MenuItem value={5} primaryText="5" />
              <MenuItem value={6} primaryText="6" />
            </SelectField>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2 m-b-15 ">
            <TextField
              onChange={updateSchedForText}
              value={sched.section_code}
              name="section_code"
              hintText="Section Code"
              floatingLabelText="Section Code"
              fullWidth={true}
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2 m-b-15 ">
            <TextField
              onChange={updateSchedForText}
              value={sched.units}
              name="units"
              hintText="Units"
              floatingLabelText="Units"
              fullWidth={true}
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2 m-b-15 ">
            <TextField
              onChange={updateSchedForText}
              value={sched.room_no}
              name="room_no"
              hintText="Room"
              floatingLabelText="Room Number"
              fullWidth={true}
            />
          </div>
        </div>
        <div style={styles.buttons}>
          <Link to={params ? "/schedules" : "/"}>
            <RaisedButton label="Cancel"
              style={styles.saveButton} />
          </Link>
          {params ?
            <RaisedButton label="Delete"
              style={styles.saveButton}
              onTouchTap={(e) => {
                e.preventDefault();
                props.onDeleteEvent(sched._id);
              }}
              secondary={true} /> : null}
          <RaisedButton label="Save"
            style={styles.saveButton}
            type="submit"
            primary={true} />
        </div>
      </form>
    </PageBase>
  );
};

export default FormSched;
